import { parseCss } from "@webstudio-is/css-data";
import type { JsonObject } from "type-fest";
import type { Template } from "../..";
import { getCode } from "../../../post-process";
import { prompt } from "./__generated__";

export const template: Template = {
  prompt,
  temperature: 0.5,
  maxTokens: 3000,
  getCode: (response: string) => getCode(response, "css"),
  transform: (css: string) => {
    return parseCss(css);
  },
  validate: (json: JsonObject) => {},
};
