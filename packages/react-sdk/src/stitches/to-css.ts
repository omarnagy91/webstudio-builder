import type { CSS } from "./stitches";
import type { StyleProperty, StyleValue, Breakpoint } from "../css";
import { DEFAULT_FONT_FALLBACK, SYSTEM_FONTS } from "@webstudio-is/fonts";
import { Instance } from "..";

type ToCssOptions = {
  withFallback: boolean;
};

const defaultOptions = {
  withFallback: true,
};

export const toVarNamespace = (id: string, property: string) => {
  return `${property}-${id}`;
};
