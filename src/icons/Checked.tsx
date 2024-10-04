import * as React from "react";
import { SVGProps } from "react";
const SvgChecked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={10}
    height={8}
    viewBox="0 0 10 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 4L3.66667 6.5L9 1.5"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgChecked;
