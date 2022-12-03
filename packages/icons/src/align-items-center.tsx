import * as React from "react";
import { IconProps } from "./types";

export const AlignItemsCenterIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
          d="M3.5 0.8C3.5 0.358172 3.85817 -8.36893e-08 4.3 0L5.7 2.65182e-07C6.14183 3.48872e-07 6.5 0.358173 6.5 0.8L6.5 9.2C6.5 9.64183 6.14183 10 5.7 10H4.3C3.85817 10 3.5 9.64183 3.5 9.2L3.5 0.8Z"
        />
        <path
          fill={color}
          d="M7.5 2.8C7.5 2.35817 7.85817 2 8.3 2L9.7 2C10.1418 2 10.5 2.35817 10.5 2.8V7.2C10.5 7.64183 10.1418 8 9.7 8L8.3 8C7.85817 8 7.5 7.64183 7.5 7.2L7.5 2.8Z"
        />
        <path
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 4.95C0.5 4.5634 0.843927 4.25 1.26818 4.25H12.7318C13.1561 4.25 13.5 4.5634 13.5 4.95C13.5 5.3366 13.1561 5.65 12.7318 5.65H1.26818C0.843927 5.65 0.5 5.3366 0.5 4.95Z"
        />
      </svg>
    );
  }
);
AlignItemsCenterIcon.displayName = "AlignItemsCenterIcon";
