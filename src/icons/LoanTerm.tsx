import * as React from "react";
import { SVGProps } from "react";
const SvgLoanTerm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="36" cy="36" r="36" fill="url(#paint0_linear_7690_57489)" />

    <path
      d="M53.9992 35.3499C53.9992 45.9199 45.532 54.4985 35.0992 54.4985C24.6664 54.4985 16.1992 45.9199 16.1992 35.3499C16.1992 24.7798 24.6664 16.2012 35.0992 16.2012C45.532 16.2012 53.9992 24.7798 53.9992 35.3499Z"
      stroke="#F26841"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M40.9221 42.3765L35.0631 38.834C34.0425 38.2212 33.2109 36.7468 33.2109 35.5404V27.6895"
      stroke="#F26841"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <defs>
      <linearGradient
        id="paint0_linear_7690_57489"
        x1="36"
        y1="0"
        x2="36"
        y2="72"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F26841" stopOpacity="0.1" />

        <stop offset="1" stopColor="#F26841" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
//(SvgLoanTerm);
export default SvgLoanTerm;
