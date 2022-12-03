import * as React from "react";
import { IconProps } from "./types";

export const JustifyContentStartIcon = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
  return (
    <svg
      width="10"
      height="14"
      viewBox="0 0 10 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={forwardedRef}
    >
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.20002 0.5C1.64185 0.5 2.00002 0.843927 2.00002 1.26818L2.00002 12.7318C2.00002 13.1561 1.64185 13.5 1.20002 13.5C0.758197 13.5 0.400024 13.1561 0.400024 12.7318L0.400025 1.26818C0.400025 0.843927 0.758197 0.5 1.20002 0.5Z"
      />
      <path
        fill={color}
        d="M3.00003 3.8C3.00003 3.35817 3.3582 3 3.80003 3L5.20003 3C5.64185 3 6.00003 3.35817 6.00003 3.8L6.00002 10.2C6.00002 10.6418 5.64185 11 5.20003 11H3.80002C3.3582 11 3.00003 10.6418 3.00003 10.2L3.00003 3.8Z"
      />
      <path
        fill={color}
        d="M7.00003 3.8C7.00003 3.35817 7.3582 3 7.80003 3L9.20003 3C9.64186 3 10 3.35817 10 3.8L10 10.2C10 10.6418 9.64185 11 9.20003 11H7.80003C7.3582 11 7.00003 10.6418 7.00003 10.2L7.00003 3.8Z"
      />
    </svg>
  );
});
JustifyContentStartIcon.displayName = "JustifyContentStartIcon";
