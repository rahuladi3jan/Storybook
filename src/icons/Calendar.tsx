import * as React from "react";
import { SVGProps } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.56482 4V6.1"
      stroke={props.fill || "#191919"}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.4352 4V6.1"
      stroke={props.fill || "#191919"}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 9.8335H18"
      stroke={props.fill || "#191919"}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 8.63497V14.5314C18 16.6125 16.8333 17.9998 14.1111 17.9998H7.88889C5.16667 17.9998 4 16.6125 4 14.5314V8.63497C4 6.55389 5.16667 5.1665 7.88889 5.1665H14.1111C16.8333 5.1665 18 6.55389 18 8.63497Z"
      stroke={props.fill || "#191919"}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCalendar;
