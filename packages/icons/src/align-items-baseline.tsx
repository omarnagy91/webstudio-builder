import * as React from "react";
import { IconProps } from "./types";

export const AlignItemsBaselineIcon = React.forwardRef<
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
        d="M3.5 0.8C3.5 0.358172 3.85817 0 4.3 0H5.7C6.14183 0 6.5 0.358173 6.5 0.8L6.5 9.2C6.5 9.64183 6.14183 10 5.7 10H4.3C3.85817 10 3.5 9.64183 3.5 9.2V0.8ZM4.5 4.26074L4.5 1L5.5 1L5.5 4.26074H4.5Z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 7.2C10.5 7.64183 10.1418 8 9.7 8H8.3C7.85817 8 7.5 7.64183 7.5 7.2L7.5 5.06074C7.5 5.06026 7.5 5.05978 7.5 5.0593L7.5 0.8C7.5 0.358172 7.85817 0 8.3 0H9.7C10.1418 0 10.5 0.358173 10.5 0.8L10.5 7.2ZM8.5 1L8.5 4.26074H9.5L9.5 1L8.5 1Z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 4.95C0.5 4.5634 0.843927 4.25 1.26818 4.25H12.7318C13.1561 4.25 13.5 4.5634 13.5 4.95C13.5 5.3366 13.1561 5.65 12.7318 5.65H1.26818C0.843927 5.65 0.5 5.3366 0.5 4.95Z"
      />
    </svg>
  );
});
AlignItemsBaselineIcon.displayName = "AlignItemsBaselineIcon";
