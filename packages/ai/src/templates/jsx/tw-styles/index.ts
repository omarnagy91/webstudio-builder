// import { parseCss } from "@webstudio-is/css-data";
import type { JsonObject } from "type-fest";
import type { Template } from "../..";
import { getCode } from "../../../post-process";
import { prompt } from "./__generated__";
import { twStyles } from "./__generated__/tw-styles";

export const template: Template = {
  prompt,
  temperature: 0.5,
  maxTokens: 3000,
  getCode: (response: string) => getCode(response, "YAML"),
  transform: (yaml: string) => {
    const styles = yaml
      .split("\n")
      .map((line) => {
        let [className, value] = line.split(":");
        if (!value) {
          return null;
        }
        className = className.trim().replace(/^[^s]+/, "");
        value = value.trim().replace(/["']/g, "");
        const twClasses = value.split(" ");
        const styles = twClasses.flatMap((c) => twStyles[c]).filter(Boolean);
        return [className, styles];
      })
      .filter(Boolean);

    return Object.fromEntries(styles);
  },
  validate: (json: JsonObject) => {},
};
