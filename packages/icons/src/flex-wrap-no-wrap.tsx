import * as React from "react";
import { IconProps } from "./types";

export const FlexWrapNowrapIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        width="14"
        height="6"
        viewBox="0 0 14 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M0.5 0.5C0.5 0.223858 0.723858 4.37114e-07 1 4.37114e-07H3C3.27614 4.37114e-07 3.5 0.223858 3.5 0.5V5.5C3.5 5.77614 3.27614 6 3 6H1C0.723858 6 0.5 5.77614 0.5 5.5V0.5Z"
        />
        <path
          fill={color}
          d="M5.5 0.5C5.5 0.223858 5.72386 2.18557e-07 6 2.18557e-07H8C8.27614 2.18557e-07 8.5 0.223858 8.5 0.5V5.5C8.5 5.77614 8.27614 6 8 6H6C5.72386 6 5.5 5.77614 5.5 5.5V0.5Z"
        />
        <path
          fill={color}
          d="M10.5 0.5C10.5 0.223857 10.7239 0 11 0H13C13.2761 0 13.5 0.223858 13.5 0.5V5.5C13.5 5.77614 13.2761 6 13 6H11C10.7239 6 10.5 5.77614 10.5 5.5V0.5Z"
        />
      </svg>
    );
  }
);
FlexWrapNowrapIcon.displayName = "FlexWrapNowrapIcon";
