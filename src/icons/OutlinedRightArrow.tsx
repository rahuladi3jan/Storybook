import * as React from "react";
import { SVGProps } from "react";
const SvgOutlinedRightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.9404 25.28L22.2871 20.9333C22.8004 20.42 22.8004 19.58 22.2871 19.0666L17.9404 14.72"
      stroke="#365069"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#365069" />
  </svg>
);
//(SvgOutlinedRightArrow);
export default SvgOutlinedRightArrow;
