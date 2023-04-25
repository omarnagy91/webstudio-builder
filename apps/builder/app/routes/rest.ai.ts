import type { ActionArgs } from "@remix-run/node";
import { templateJsx, type Template } from "@webstudio-is/ai";
import { isFeatureEnabled } from "@webstudio-is/feature-flags";
import type {
  ChatCompletionRequestMessage,
  CreateChatCompletionResponse,
} from "openai";
import { z } from "zod";
import { zfd } from "zod-form-data";
import env from "~/env/env.server";

const StepSchema = z.enum(["instances", "styles"]);
type StepName = z.infer<typeof StepSchema>;

type Messages = ChatCompletionRequestMessage[] | null;
type Step = { name: StepName; template: Template; messages: Messages };
type Steps = Step[];

const schema = zfd.formData({
  prompt: zfd.text(z.string().max(1380)),
  steps: zfd.repeatableOfType(zfd.text(StepSchema)),
  messages: zfd.repeatableOfType(zfd.text().optional()),
});

type OpenAIConfig = {
  apiKey: string;
  organization: string;
  model: "gpt-3.5-turbo" | "gpt-4";
};

// @todo Add end-to-end types.

export const action = async ({ request }: ActionArgs) => {
  if (!isFeatureEnabled("ai")) {
    return { errors: ["Feature not available"] };
  }

  // @todo Add session checks and rate limiting.

  // @todo Incorporate embeddings to provide context to each step:
  // instances -> pick relevant components metadata with description etc.
  // props     -> pick props definitions for used components? This payload can be very long.
  // styles    -> pick examples?

  try {
    const formData = schema.parse(await request.formData());
    const userPrompt = formData.prompt.trim().replace(/`/g, "\\`");
    const steps: Steps = formData.steps.map((step, index) => {
      const m = formData.messages[index];
      return {
        name: step,
        template: templateJsx[step],
        messages: typeof m === "string" ? JSON.parse(m) : null,
      };
    });

    const result = await generate({
      userPrompt,
      steps,
      config: {
        apiKey: env.OPENAI_KEY || "",
        organization: env.OPENAI_ORG || "",
        model: "gpt-3.5-turbo",
      },
    });

    return result;
  } catch (error) {
    return { errors: error.message };
  }

  return { errors: "Unexpected error" };
};

// @todo replace with langchain
export const generate = async function generate({
  userPrompt,
  steps,
  config,
}: {
  userPrompt: string;
  steps: Steps;
  config: OpenAIConfig;
}) {
  const { apiKey, organization, model }: OpenAIConfig = config;
  if (apiKey.trim().length === 0) {
    throw new Error("OpenAI API missing");
  }

  if (!organization.startsWith("org-")) {
    throw new Error("OpenAI org missing or invalid");
  }

  try {
    const chain = getChainForPrompt({
      prompt: userPrompt,
      steps,
      complete: (step, messages) =>
        fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${apiKey}`,
            "OpenAI-Organization": organization,
          },
          body: JSON.stringify({
            model,
            messages,
            temperature: step.template.temperature,
            max_tokens: step.template.maxTokens,
          }),
        }).then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(`${response.status}: ${response.statusText}`);
        }),
    });

    const responses = await chain();
    return responses.map(([stepName, response]) => {
      const step = steps.find((s) => s.name === stepName);
      if (step === undefined) {
        throw new Error("Invalid response handler");
      }
      const { template } = step;
      const code = template.getCode(response);
      let json;
      try {
        json = template.transform(code);

        if (typeof template.validate === "function") {
          template.validate(json);
          return [stepName, { code, json }];
        }
      } catch (error) {
        const errorMessage = `Invalid ${step} generation. ${
          process.env.NODE_ENV === "production"
            ? ""
            : // : `${JSON.stringify(json, null, 2)}\n\n${error.message}`
              `${JSON.stringify(json, null, 2)}\n\n${error.message}`
        }`;

        throw new Error(errorMessage);
      }
    });
  } catch (error) {
    const errorMessage = `Something went wrong. ${
      process.env.NODE_ENV === "production" ? "" : `${(error as Error).message}`
    }`;
    if (process.env.NODE_ENV !== "production") {
      console.error(errorMessage);
    }
    throw new Error(errorMessage);
  }
};

const getChainForPrompt = function getChainForPrompt({
  prompt,
  steps,
  complete,
}: {
  prompt: string;
  steps: Steps;
  complete: (
    step: Step,
    messages: ChatCompletionRequestMessage[]
  ) => Promise<CreateChatCompletionResponse>;
}) {
  return async function chain() {
    const responses: [StepName, string][] = [];

    for (let i = 0; i < steps.length; i++) {
      const { name: step, template, messages } = steps[i];

      const completionRequestMessages = [
        {
          role: "user",
          content: template.prompt.replace(/{prompt-content}/, prompt).trim(),
        } as ChatCompletionRequestMessage,
      ];

      if (Array.isArray(messages)) {
        completionRequestMessages.unshift(...messages);
      } else if (i > 0 && responses[i - 1]) {
        completionRequestMessages.unshift({
          role: "assistant",
          content: responses[i - 1][1],
        });
      }

      const completion = await complete(steps[i], completionRequestMessages);
      responses[i] = [step, completion.choices[0].message?.content || ""];
    }

    return responses;
  };
};
