import * as csstree from "css-tree";
import { LayersValue, TupleValue } from "@webstudio-is/css-data";
import type {
  InvalidValue,
  TupleValueItem,
  Unit,
} from "@webstudio-is/css-data";
import { colord } from "colord";

export const parseBoxShadow = (
  boxShadow: string
): LayersValue | InvalidValue => {
  let tokenStream = boxShadow.trim();
  tokenStream = tokenStream.endsWith(";")
    ? tokenStream.slice(0, -1)
    : tokenStream;

  const cleanupKeywords = ["box-shadow:"];

  for (const cleanupKeyword of cleanupKeywords) {
    tokenStream = tokenStream.startsWith(cleanupKeyword)
      ? tokenStream.slice(cleanupKeyword.length).trim()
      : tokenStream;
  }

  const ast = csstree.parse(tokenStream, { context: "value" });
  const parsed = csstree.lexer.matchProperty("box-shadow", ast);

  if (parsed.error) {
    return {
      type: "invalid",
      value: boxShadow,
    };
  }

  const layers: TupleValue[] = [];

  csstree.walk(ast, (node) => {
    if (node.type === "Value") {
      const children = node.children;
      let layer: csstree.CssNode[] = [];

      for (const child of children) {
        if (children.last === child) {
          layer.push(child);
        }

        if (child.type === "Operator" || children.last === child) {
          const shadow: TupleValueItem[] = [];

          /**
           * https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow#syntax
           * `inset` and color can be at the start or end and their sequence can be anywhere.
           * The rest need to foolow the sequence all the time
           */

          for (let index = 0; index < layer.length; index++) {
            const item = layer[index];

            if (item.type === "Identifier") {
              shadow.push({
                type: "keyword",
                value: (item as csstree.Identifier).name,
              });
            }

            if (item.type === "Function" || item.type === "Hash") {
              const colorValue = colord(csstree.generate(item));
              if (!colorValue.isValid()) {
                return;
              }
              const rgb = colorValue.toRgb();
              shadow.push({
                type: "rgb",
                alpha: rgb.a,
                r: rgb.r,
                g: rgb.g,
                b: rgb.b,
              });
            }

            if (item.type === "Dimension") {
              shadow.push({
                type: "unit",
                value: Number(item.value),
                unit: item.unit as Unit,
              });
            }

            if (item.type === "Number") {
              shadow.push({
                type: "unit",
                value: Number(item.value),
                unit: "number",
              });
            }
          }

          layers.push({
            type: "tuple",
            value: shadow,
          });
          layer = [];
          continue;
        }

        layer.push(child);
      }
    }
  });

  return layers.length > 0
    ? {
        type: "layers",
        value: layers,
      }
    : { type: "invalid", value: boxShadow };
};
