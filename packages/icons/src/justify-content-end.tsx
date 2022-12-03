import * as React from "react";
import { IconProps } from "./types";

export const JustifyContentEndIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
          d="M8.8 13.5C8.35817 13.5 8 13.1561 8 12.7318L8 1.26819C8 0.843934 8.35818 0.500008 8.8 0.500008C9.24183 0.500008 9.6 0.843934 9.6 1.26819L9.6 12.7318C9.6 13.1561 9.24183 13.5 8.8 13.5Z"
        />
        <path
          fill={color}
          d="M7 10.2C7 10.6418 6.64183 11 6.2 11H4.8C4.35817 11 4 10.6418 4 10.2L4 3.80001C4 3.35818 4.35818 3.00001 4.8 3.00001L6.2 3.00001C6.64183 3.00001 7 3.35818 7 3.80001L7 10.2Z"
        />
        <path
          fill={color}
          d="M3 10.2C3 10.6418 2.64183 11 2.2 11L0.8 11C0.358172 11 -1.10359e-07 10.6418 0 10.2L1.59859e-06 3.80001C1.70895e-06 3.35818 0.358174 3.00001 0.800002 3.00001L2.2 3.00001C2.64183 3.00001 3 3.35818 3 3.80001L3 10.2Z"
        />
      </svg>
    );
  }
);
JustifyContentEndIcon.displayName = "JustifyContentEndIcon";
