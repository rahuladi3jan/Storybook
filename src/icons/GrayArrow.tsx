import * as React from "react";
import { SVGProps } from "react";
const SvgGrayArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width ? props.width : 22}
    height={props.height ? props.height : 22}
    viewBox={`0 0 ${props.width ? props.width : 22} ${
      props.height ? props.height : 22
    }`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="11" cy="11" r="11" fill="#5E7387" />
    <path
      d="M6 10.45C5.69624 10.45 5.45 10.6962 5.45 11C5.45 11.3038 5.69624 11.55 6 11.55L6 10.45ZM16.2889 11.3889C16.5037 11.1741 16.5037 10.8259 16.2889 10.6111L12.7887 7.11091C12.5739 6.89612 12.2257 6.89612 12.0109 7.11091C11.7961 7.3257 11.7961 7.67394 12.0109 7.88873L15.1222 11L12.0109 14.1113C11.7961 14.3261 11.7961 14.6743 12.0109 14.8891C12.2257 15.1039 12.5739 15.1039 12.7887 14.8891L16.2889 11.3889ZM6 11.55L15.9 11.55L15.9 10.45L6 10.45L6 11.55Z"
      fill="white"
    />
  </svg>
);
export default SvgGrayArrow;
