import * as React from "react";
import { SVGProps } from "react";
const SvgGrayCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="12" fill="#D7DCE1" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.868 6.868a.404.404 0 0 1 .571 0L12 11.428l4.56-4.56a.404.404 0 1 1 .572.571L12.572 12l4.56 4.56a.404.404 0 0 1-.571.572L12 12.572l-4.56 4.56a.404.404 0 0 1-.572-.571L11.428 12l-4.56-4.56a.404.404 0 0 1 0-.572Z"
      fill={props.fill || "#fff"}
    />
  </svg>
);
export default SvgGrayCross;
