import * as React from "react";
import { IconProps } from "./types";

export const AlignItemsStretchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 1.3C0.5 0.913399 0.843927 0.599998 1.26818 0.599998H12.7318C13.1561 0.599998 13.5 0.913399 13.5 1.3C13.5 1.6866 13.1561 2 12.7318 2H1.26818C0.843927 2 0.5 1.6866 0.5 1.3Z"
        />
        <path
          fill={color}
          d="M3.5 3.8C3.5 3.35817 3.85817 3 4.3 3L5.7 3C6.14183 3 6.5 3.35817 6.5 3.8L6.5 10.2C6.5 10.6418 6.14183 11 5.7 11H4.3C3.85817 11 3.5 10.6418 3.5 10.2L3.5 3.8Z"
        />
        <path
          fill={color}
          d="M7.5 3.8C7.5 3.35817 7.85817 3 8.3 3L9.7 3C10.1418 3 10.5 3.35817 10.5 3.8L10.5 10.2C10.5 10.6418 10.1418 11 9.7 11H8.3C7.85817 11 7.5 10.6418 7.5 10.2L7.5 3.8Z"
        />
        <path
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 12.7C0.5 12.3134 0.843927 12 1.26818 12H12.7318C13.1561 12 13.5 12.3134 13.5 12.7C13.5 13.0866 13.1561 13.4 12.7318 13.4H1.26818C0.843927 13.4 0.5 13.0866 0.5 12.7Z"
        />
      </svg>
    );
  }
);
AlignItemsStretchIcon.displayName = "AlignItemsStretchIcon";
