import * as React from "react";
import { SVGProps } from "react";
const SvgPending = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Status Icons">
      <g id="clock">
        <path
          id="Vector"
          d="M11.9988 2C6.86235 2 2.67676 6.49 2.67676 12C2.67676 17.51 6.86235 22 11.9988 22C17.1352 22 21.3208 17.51 21.3208 12C21.3208 6.49 17.1352 2 11.9988 2ZM16.0539 15.57C15.9234 15.81 15.6903 15.94 15.4479 15.94C15.3268 15.94 15.2056 15.91 15.0937 15.83L12.2039 13.98C11.4861 13.52 10.9547 12.51 10.9547 11.62V7.52C10.9547 7.11 11.2717 6.77 11.6539 6.77C12.0361 6.77 12.353 7.11 12.353 7.52V11.62C12.353 11.98 12.6327 12.51 12.9217 12.69L15.8115 14.54C16.1471 14.75 16.259 15.21 16.0539 15.57Z"
          fill="#D6A426"
        />
      </g>
    </g>
  </svg>
);
//(SvgPending);
export default SvgPending;
