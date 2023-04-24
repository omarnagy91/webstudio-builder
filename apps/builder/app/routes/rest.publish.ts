import type { ActionArgs } from "@remix-run/node";
import { prisma } from "@webstudio-is/prisma-client";
import { zfd } from "zod-form-data";
import env from "~/env/env.server";
import { createContext } from "~/shared/context.server";
import * as db from "~/shared/db";
import { BUILD_TIMEOUT } from "~/shared/remix/constants";

const schema = zfd.formData({
  domain: zfd.text(),
  projectId: zfd.text(),
});

export const action = async ({ request }: ActionArgs) => {
  const { domain, projectId } = schema.parse(await request.formData());

  try {
    const context = await createContext(request);

    await prisma.build.updateMany({
      where: {
        projectId,
        isProd: true,
        status: { in: ["created", "started"] },
        stateUpdatedAt: { gt: new Date(Date.now() - BUILD_TIMEOUT) },
      },
      data: { status: "failed", stateUpdatedAt: new Date() },
    });

    await db.misc.publish({ projectId, domain }, context);
    if (env.PUBLISHER_ENDPOINT && env.PUBLISHER_TOKEN) {
      const headers = new Headers();
      headers.append("X-AUTH-WEBSTUDIO", env.PUBLISHER_TOKEN || "");
      headers.append("Content-Type", "text/plain");
      const url = new URL(request.url);
      const response = await fetch(env.PUBLISHER_ENDPOINT, {
        method: "PUT",
        headers,
        body: JSON.stringify({
          builderApiOrigin: url.origin,
          projectId,
          projectName: domain,
          // To support preview deployments
          branchName: env.BRANCH_NAME,
        }),
      });
      const text = await response.text();
      if (!response.ok) {
        throw new Error(text);
      }
    }
    return { domain };
  } catch (error) {
    if (error instanceof Error) {
      return {
        errors: error.message,
      };
    }
  }
  return { errors: "Unexpected error" };
};
