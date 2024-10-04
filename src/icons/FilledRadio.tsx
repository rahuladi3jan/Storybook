import * as React from "react";
import { SVGProps } from "react";
const SvgFilledRadio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 12a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0ZM12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm0 13.001A4.501 4.501 0 1 0 12 7.5a4.501 4.501 0 0 0 0 9.002Z"
      fill={props.fill || "#20303F"}
    />
  </svg>
);
export default SvgFilledRadio;
