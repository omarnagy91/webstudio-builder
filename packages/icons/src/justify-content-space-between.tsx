import * as React from "react";
import { IconProps } from "./types";

export const JustifyContentSpaceBetweenIcon = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
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
        d="M3.00003 3.8C3.00003 3.35817 3.3582 3 3.80003 3L5.20003 3C5.64185 3 6.00003 3.35817 6.00003 3.8L6.00003 10.2C6.00003 10.6418 5.64185 11 5.20003 11H3.80002C3.3582 11 3.00003 10.6418 3.00003 10.2L3.00003 3.8Z"
      />
      <path
        fill={color}
        d="M8.00002 3.8C8.00002 3.35817 8.3582 3 8.80002 3L10.2 3C10.6419 3 11 3.35817 11 3.8L11 10.2C11 10.6418 10.6419 11 10.2 11H8.80002C8.3582 11 8.00002 10.6418 8.00002 10.2L8.00002 3.8Z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8 0.5C13.2419 0.5 13.6 0.843927 13.6 1.26818V12.7318C13.6 13.1561 13.2419 13.5 12.8 13.5C12.3582 13.5 12 13.1561 12 12.7318L12 1.26818C12 0.843927 12.3582 0.5 12.8 0.5Z"
      />
    </svg>
  );
});
JustifyContentSpaceBetweenIcon.displayName = "JustifyContentSpaceBetweenIcon";
