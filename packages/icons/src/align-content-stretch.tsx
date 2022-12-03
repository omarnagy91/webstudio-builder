import * as React from "react";
import { IconProps } from "./types";

export const AlignContentStretchIcon = React.forwardRef<
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
        d="M9.75 3C9.75 2.72386 9.97386 2.5 10.25 2.5H12.75C13.0261 2.5 13.25 2.72386 13.25 3V6C13.25 6.27614 13.0261 6.5 12.75 6.5H10.25C9.97386 6.5 9.75 6.27614 9.75 6V3Z"
      />
      <path
        fill={color}
        d="M5.25 3C5.25 2.72386 5.47386 2.5 5.75 2.5H8.25C8.52614 2.5 8.75 2.72386 8.75 3V6C8.75 6.27614 8.52614 6.5 8.25 6.5H5.75C5.47386 6.5 5.25 6.27614 5.25 6V3Z"
      />
      <path
        fill={color}
        d="M0.749999 3C0.749999 2.72386 0.973856 2.5 1.25 2.5H3.75C4.02614 2.5 4.25 2.72386 4.25 3V6C4.25 6.27614 4.02614 6.5 3.75 6.5H1.25C0.973856 6.5 0.749999 6.27614 0.749999 6V3Z"
      />
      <path
        fill={color}
        d="M0.749999 8C0.749999 7.72386 0.973857 7.5 1.25 7.5H3.75C4.02614 7.5 4.25 7.72386 4.25 8V11C4.25 11.2761 4.02614 11.5 3.75 11.5H1.25C0.973857 11.5 0.749999 11.2761 0.749999 11V8Z"
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
AlignContentStretchIcon.displayName = "AlignContentStretchIcon";
