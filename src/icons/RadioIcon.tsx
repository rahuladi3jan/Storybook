import * as React from "react";
import { SVGProps } from "react";
const SvgRadioIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Z"
      stroke={props.fill || "#365069"}
    />
  </svg>
);
export default SvgRadioIcon;
