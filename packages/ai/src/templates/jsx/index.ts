import type { Template } from "..";
import { template as instances } from "./instances";
import { template as styles } from "./styles";
// import { template as styles } from "./tw-styles";

export const templateJsx: Record<"instances" | "styles", Template> = {
  instances,
  styles,
};

// export type TemplateJsxStep = keyof typeof templateJsx;
