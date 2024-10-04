import * as React from "react";
import { SVGProps } from "react";
const SvgLockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 13.333v-2.666c0-4.414 1.333-8 8-8s8 3.586 8 8v2.666M22.667 29.333H9.333C4 29.333 2.667 28 2.667 22.667V20c0-5.333 1.333-6.667 6.666-6.667h13.334c5.333 0 6.666 1.334 6.666 6.667v2.667c0 5.333-1.333 6.666-6.666 6.666Z"
      stroke="#2B4054"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.329 21.333h.012M15.994 21.333h.012M10.66 21.333h.011"
      stroke={props.fill || "#F26841"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgLockIcon;
