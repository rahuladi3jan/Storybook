import * as React from "react";
import { SVGProps } from "react";
const SvgDoubleArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={17}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.641 5.068 5.574 3 3.506 5.068M5.574 13.006V3M9.365 10.938l2.068 2.067 2.068-2.068M11.432 3v10.006"
      stroke={props.fill || "#365069"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgDoubleArrow;
