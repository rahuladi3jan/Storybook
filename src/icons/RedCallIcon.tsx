import * as React from "react";
import { SVGProps } from "react";
const SvgPhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="32" height="32" rx="16" fill="#FEF0EC" />
    <path
      d="M14.06 16.843a5.826 5.826 0 0 0 2.717 2.71.557.557 0 0 0 .55-.041l1.743-1.164a.55.55 0 0 1 .53-.049l3.261 1.4a.55.55 0 0 1 .335.58 3.345 3.345 0 0 1-3.318 2.92A9.478 9.478 0 0 1 10.4 13.72a3.346 3.346 0 0 1 2.92-3.317.55.55 0 0 1 .579.334l1.4 3.269a.558.558 0 0 1-.041.523l-1.164 1.77a.558.558 0 0 0-.035.544Z"
      fill={props.fill || "#F26841"}
    />
  </svg>
);
export default SvgPhoneIcon;
