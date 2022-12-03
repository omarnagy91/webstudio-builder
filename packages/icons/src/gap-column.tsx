import * as React from "react";
import { IconProps } from "./types";

export const ColumnGapIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          stroke={color}
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 14L3.53333 14C4.28007 14 4.65344 14 4.93865 13.8547C5.18954 13.7268 5.39351 13.5229 5.52134 13.272C5.66667 12.9868 5.66667 12.6134 5.66667 11.8667L5.66667 4.13333C5.66667 3.3866 5.66667 3.01323 5.52134 2.72801C5.39351 2.47713 5.18954 2.27316 4.93865 2.14532C4.65344 2 4.28007 2 3.53333 2L3 2M13 14L12.4667 14C11.7199 14 11.3466 14 11.0613 13.8547C10.8105 13.7268 10.6065 13.5229 10.4787 13.272C10.3333 12.9868 10.3333 12.6134 10.3333 11.8667L10.3333 4.13333C10.3333 3.3866 10.3333 3.01323 10.4787 2.72801C10.6065 2.47713 10.8105 2.27316 11.0613 2.14532C11.3466 2 11.7199 2 12.4667 2L13 2"
        />
      </svg>
    );
  }
);
ColumnGapIcon.displayName = "ColumnGapIcon";
