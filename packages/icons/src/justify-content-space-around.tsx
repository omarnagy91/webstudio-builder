import * as React from "react";
import { IconProps } from "./types";

export const JustifyContentSpaceAroundIcon = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={forwardedRef}
    >
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.70002 0.5C2.14185 0.5 2.50002 0.843927 2.50002 1.26818L2.50002 12.7318C2.50002 13.1561 2.14185 13.5 1.70002 13.5C1.2582 13.5 0.900024 13.1561 0.900024 12.7318L0.900025 1.26818C0.900025 0.843927 1.2582 0.5 1.70002 0.5Z"
      />
      <path
        fill={color}
        d="M4.50003 3.8C4.50003 3.35817 4.8582 3 5.30003 3L6.70003 3C7.14185 3 7.50003 3.35817 7.50003 3.8L7.50003 10.2C7.50003 10.6418 7.14185 11 6.70003 11H5.30003C4.8582 11 4.50003 10.6418 4.50003 10.2L4.50003 3.8Z"
      />
      <path
        fill={color}
        d="M8.50003 3.8C8.50003 3.35817 8.8582 3 9.30003 3L10.7 3C11.1419 3 11.5 3.35817 11.5 3.8L11.5 10.2C11.5 10.6418 11.1419 11 10.7 11H9.30003C8.8582 11 8.50003 10.6418 8.50003 10.2L8.50003 3.8Z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.3 0.5C14.7419 0.5 15.1 0.843927 15.1 1.26818L15.1 12.7318C15.1 13.1561 14.7419 13.5 14.3 13.5C13.8582 13.5 13.5 13.1561 13.5 12.7318V1.26818C13.5 0.843927 13.8582 0.5 14.3 0.5Z"
      />
    </svg>
  );
});
JustifyContentSpaceAroundIcon.displayName = "JustifyContentSpaceAroundIcon";
