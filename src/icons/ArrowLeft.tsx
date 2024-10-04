import * as React from "react";
import { SVGProps } from "react";
const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.7511 8.88525L5.63672 16.9997L13.7511 25.1141"
      stroke={props.fill || "#333333"}
      strokeWidth="2.1875"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28.4965 17.0415H5.99805"
      stroke={props.fill || "#333333"}
      strokeWidth="2.1875"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ArrowLeft;
