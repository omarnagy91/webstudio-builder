import * as React from "react";
import { IconProps } from "./types";

export const AlignItemsEndIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.7318 10.4001C13.1561 10.4001 13.5 10.0867 13.5 9.70009C13.5 9.31349 13.1561 9.00009 12.7318 9.00009H1.26818C0.843926 9.00009 0.5 9.31349 0.5 9.70009C0.5 10.0867 0.843926 10.4001 1.26818 10.4001H12.7318Z"
        />
        <path
          fill={color}
          d="M9.7 8.00008C10.1418 8.00008 10.5 7.64191 10.5 7.20008L10.5 3.80008C10.5 3.35826 10.1418 3.00008 9.7 3.00008H8.3C7.85817 3.00008 7.5 3.35826 7.5 3.80008L7.5 7.20008C7.5 7.64191 7.85817 8.00008 8.3 8.00008H9.7Z"
        />
        <path
          fill={color}
          d="M5.7 8.00008C6.14183 8.00008 6.5 7.64191 6.5 7.20008L6.5 0.800084C6.5 0.358256 6.14183 8.39233e-05 5.7 8.39233e-05H4.3C3.85817 8.39233e-05 3.5 0.358256 3.5 0.800084L3.5 7.20008C3.5 7.64191 3.85817 8.00008 4.3 8.00008H5.7Z"
        />
      </svg>
    );
  }
);
AlignItemsEndIcon.displayName = "AlignItemsEndIcon";
