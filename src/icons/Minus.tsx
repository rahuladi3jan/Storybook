import * as React from "react";
import { SVGProps } from "react";
const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 10C4 9.72386 4.20664 9.5 4.46154 9.5H15.5385C15.7934 9.5 16 9.72386 16 10C16 10.2761 15.7934 10.5 15.5385 10.5H4.46154C4.20664 10.5 4 10.2761 4 10Z"
      fill="black"
    />
  </svg>
);
//(SvgMinus);
export default SvgMinus;
