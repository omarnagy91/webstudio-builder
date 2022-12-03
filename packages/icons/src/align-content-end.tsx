import * as React from "react";
import { IconProps } from "./types";

export const AlignContentEndIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.5 13.3C13.5 13.6866 13.1561 14 12.7318 14L1.26818 14C0.843926 14 0.5 13.6866 0.5 13.3C0.5 12.9134 0.843926 12.6 1.26818 12.6L12.7318 12.6C13.1561 12.6 13.5 12.9134 13.5 13.3Z"
        />
        <path
          fill={color}
          d="M9.75001 6C9.75001 5.72386 9.97387 5.5 10.25 5.5H12.75C13.0262 5.5 13.25 5.72386 13.25 6V7.5C13.25 7.77614 13.0262 8 12.75 8H10.25C9.97387 8 9.75001 7.77614 9.75001 7.5V6Z"
        />
        <path
          fill={color}
          d="M5.25001 6C5.25001 5.72386 5.47387 5.5 5.75001 5.5H8.25001C8.52615 5.5 8.75001 5.72386 8.75001 6V7.5C8.75001 7.77614 8.52615 8 8.25001 8H5.75001C5.47387 8 5.25001 7.77614 5.25001 7.5V6Z"
        />
        <path
          fill={color}
          d="M0.75001 6C0.75001 5.72386 0.973868 5.5 1.25001 5.5H3.75001C4.02615 5.5 4.25001 5.72386 4.25001 6V7.5C4.25001 7.77614 4.02615 8 3.75001 8H1.25001C0.973868 8 0.75001 7.77614 0.75001 7.5V6Z"
        />
        <path
          fill={color}
          d="M0.749999 9.5C0.749999 9.22386 0.973857 9 1.25 9H3.75C4.02614 9 4.25 9.22386 4.25 9.5V11C4.25 11.2761 4.02614 11.5 3.75 11.5H1.25C0.973857 11.5 0.749999 11.2761 0.749999 11V9.5Z"
        />
        <path
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5 0.700001C13.5 1.0866 13.1561 1.4 12.7318 1.4L1.26818 1.4C0.843926 1.4 0.500001 1.0866 0.500001 0.7C0.500001 0.313401 0.843926 -3.70896e-08 1.26818 0L12.7318 1.00218e-06C13.1561 1.03927e-06 13.5 0.313402 13.5 0.700001Z"
        />
      </svg>
    );
  }
);
AlignContentEndIcon.displayName = "AlignContentEndIcon";
