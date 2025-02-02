import * as React from "react";
import { SVGProps } from "react";
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.07076 5.04647C9.26603 4.85121 9.58261 4.85121 9.77787 5.04647L15.2112 10.4798C16.0481 11.3167 16.0481 12.6833 15.2112 13.5202L9.77787 18.9536C9.58261 19.1488 9.26603 19.1488 9.07076 18.9536C8.8755 18.7583 8.8755 18.4417 9.07076 18.2465L14.5041 12.8131C14.9505 12.3667 14.9505 11.6333 14.5041 11.1869L9.07076 5.75358C8.8755 5.55832 8.8755 5.24173 9.07076 5.04647Z"
      fill="black"
    />
  </svg>
);
export default SvgChevronRight;
