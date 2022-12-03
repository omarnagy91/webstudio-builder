import * as React from "react";
import { IconProps } from "./types";

export const AlignContentSpaceAroundIcon = React.forwardRef<
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
        d="M13.5 13.3C13.5 13.6866 13.1561 14 12.7318 14L1.26818 14C0.843926 14 0.5 13.6866 0.5 13.3C0.5 12.9134 0.843926 12.6 1.26818 12.6L12.7318 12.6C13.1561 12.6 13.5 12.9134 13.5 13.3Z"
      />
      <path
        fill={color}
        d="M9.75 3.8C9.75 3.52386 9.97386 3.3 10.25 3.3H12.75C13.0261 3.3 13.25 3.52386 13.25 3.8V5.3C13.25 5.57614 13.0261 5.8 12.75 5.8H10.25C9.97386 5.8 9.75 5.57614 9.75 5.3V3.8Z"
      />
      <path
        fill={color}
        d="M5.25 3.8C5.25 3.52386 5.47386 3.3 5.75 3.3H8.25C8.52614 3.3 8.75 3.52386 8.75 3.8V5.3C8.75 5.57614 8.52614 5.8 8.25 5.8H5.75C5.47386 5.8 5.25 5.57614 5.25 5.3V3.8Z"
      />
      <path
        fill={color}
        d="M0.75 3.8C0.75 3.52386 0.973857 3.3 1.25 3.3H3.75C4.02614 3.3 4.25 3.52386 4.25 3.8V5.3C4.25 5.57614 4.02614 5.8 3.75 5.8H1.25C0.973857 5.8 0.75 5.57614 0.75 5.3V3.8Z"
      />
      <path
        fill={color}
        d="M0.749999 8.7C0.749999 8.42386 0.973857 8.2 1.25 8.2H3.75C4.02614 8.2 4.25 8.42386 4.25 8.7V10.2C4.25 10.4761 4.02614 10.7 3.75 10.7H1.25C0.973857 10.7 0.749999 10.4761 0.749999 10.2V8.7Z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 0.700001C13.5 1.0866 13.1561 1.4 12.7318 1.4L1.26818 1.4C0.843926 1.4 0.500001 1.0866 0.500001 0.7C0.500001 0.313401 0.843926 -3.70896e-08 1.26818 0L12.7318 1.00218e-06C13.1561 1.03927e-06 13.5 0.313402 13.5 0.700001Z"
      />
    </svg>
  );
});
AlignContentSpaceAroundIcon.displayName = "AlignContentSpaceAroundIcon";
