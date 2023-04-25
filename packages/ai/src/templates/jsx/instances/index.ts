import { parseJsx } from "@builder.io/mitosis";
import { WsEmbedTemplate } from "@webstudio-is/react-sdk";
import type { JsonObject } from "type-fest";
import type { Template } from "../..";
import { getCode, mitosisJSONToWsEmbedTemplate } from "../../../post-process";
import { prompt } from "./__generated__";

export const template: Template = {
  prompt,
  temperature: 0,
  maxTokens: 3000,
  getCode: (response: string) => getCode(response, "jsx"),
  transform: (jsx: string) => {
    const json = parseJsx(
      `export default function App() {\n return ${jsx}\n}`,
      {
        typescript: false,
      }
    );

    return JSON.parse(mitosisJSONToWsEmbedTemplate()({ component: json }));
  },
  validate: (json: JsonObject) => {
    WsEmbedTemplate.parse(json);
  },
};
