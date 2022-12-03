import * as React from "react";
import { IconProps } from "./types";

export const JustifyContentCenterIcon = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
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
        d="M0.0999766 3.8C0.0999767 3.35817 0.458149 3 0.899977 3L2.29998 3C2.7418 3 3.09998 3.35817 3.09998 3.8L3.09998 10.2C3.09998 10.6418 2.7418 11 2.29998 11H0.899975C0.458148 11 0.0999755 10.6418 0.0999756 10.2L0.0999766 3.8Z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.99998 0.5C5.4418 0.5 5.79998 0.843927 5.79998 1.26818L5.79998 12.7318C5.79998 13.1561 5.4418 13.5 4.99998 13.5C4.55815 13.5 4.19998 13.1561 4.19998 12.7318L4.19998 1.26818C4.19998 0.843927 4.55815 0.5 4.99998 0.5Z"
      />
      <path
        fill={color}
        d="M6.89998 3.8C6.89998 3.35817 7.25815 3 7.69998 3L9.09998 3C9.54181 3 9.89998 3.35817 9.89998 3.8L9.89998 10.2C9.89998 10.6418 9.54181 11 9.09998 11H7.69998C7.25815 11 6.89998 10.6418 6.89998 10.2L6.89998 3.8Z"
      />
    </svg>
  );
});
JustifyContentCenterIcon.displayName = "JustifyContentCenterIcon";
