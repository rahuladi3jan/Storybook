import * as React from "react";
import { SVGProps } from "react";
const SvgFullyDigital = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width ? props.width : 40}
    height={props.height ? props.height : 40}
    viewBox={`0 0 ${props.width ? props.width : 40} ${
      props.height ? props.height : 40
    }`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle opacity="0.3" cx="20" cy="20" r="20" fill="#0B1015" />
    <path
      d="M28.4571 14V26C28.4571 30.8 27.4286 32 23.3143 32H17.1429C13.0286 32 12 30.8 12 26V14C12 9.2 13.0286 8 17.1429 8H23.3143C27.4286 8 28.4571 9.2 28.4571 14Z"
      stroke="white"
      strokeWidth="1.02857"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.2857 12.2002H18.1714"
      stroke="white"
      strokeWidth="1.02857"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFullyDigital;
