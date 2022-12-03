import * as React from "react";
import { IconProps } from "./types";

export const RowGapIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14 13V12.4667C14 11.7199 14 11.3466 13.8547 11.0613C13.7268 10.8105 13.5229 10.6065 13.272 10.4787C12.9868 10.3333 12.6134 10.3333 11.8667 10.3333H4.13333C3.3866 10.3333 3.01323 10.3333 2.72801 10.4787C2.47713 10.6065 2.27316 10.8105 2.14532 11.0613C2 11.3466 2 11.7199 2 12.4667V13M14 3V3.53333C14 4.28007 14 4.65344 13.8547 4.93865C13.7268 5.18954 13.5229 5.39351 13.272 5.52134C12.9868 5.66667 12.6134 5.66667 11.8667 5.66667H4.13333C3.3866 5.66667 3.01323 5.66667 2.72801 5.52134C2.47713 5.39351 2.27316 5.18954 2.14532 4.93865C2 4.65344 2 4.28007 2 3.53333V3"
        />
      </svg>
    );
  }
);
RowGapIcon.displayName = "RowGapIcon";
