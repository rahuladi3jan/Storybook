import * as React from "react";
import { SVGProps } from "react";
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.6333 7.58785C15.8286 7.78311 15.8286 8.0997 15.6333 8.29496L11.2867 12.6416C10.5781 13.3502 9.42149 13.3502 8.7129 12.6416L4.36623 8.29496C4.17097 8.0997 4.17097 7.78311 4.36623 7.58785C4.56149 7.39259 4.87808 7.39259 5.07334 7.58785L9.42001 11.9345C9.73808 12.2526 10.2615 12.2526 10.5796 11.9345L14.9262 7.58785C15.1215 7.39259 15.4381 7.39259 15.6333 7.58785Z"
      fill={props.color || "black"}
    />
  </svg>
);
export default SvgChevronDown;
