import * as React from "react";
import { SVGProps } from "react";
const SvgEditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.55 3.025 2.99 6.794a1.323 1.323 0 0 0-.292.62l-.16 1.405c-.056.508.308.855.811.768l1.397-.238c.195-.035.468-.178.603-.326l3.56-3.769c.617-.65.894-1.392-.064-2.299-.955-.898-1.679-.581-2.295.07Z"
      stroke="#365069"
      strokeWidth=".9"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.733 3.936a2.45 2.45 0 0 0 2.18 2.06"
      stroke={props.fill || "#365069"}
      strokeWidth=".9"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgEditIcon;
