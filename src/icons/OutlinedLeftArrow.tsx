import * as React from "react";
import { SVGProps } from "react";
const SvgOutlinedLeftArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.0002 25.28L17.6536 20.9333C17.1402 20.42 17.1402 19.58 17.6536 19.0666L22.0002 14.72"
      stroke="#365069"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#365069" />
  </svg>
);
//(SvgOutlinedLeftArrow);
export default SvgOutlinedLeftArrow;
