import * as React from "react";
import { SVGProps } from "react";
const SvgPartialChecked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={10}
    height={2}
    viewBox="0 0 10 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1.00092L9 0.999023"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
//(SvgPartialChecked);
export default SvgPartialChecked;
