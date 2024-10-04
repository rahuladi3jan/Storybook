import * as React from "react";
const SvgPending = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 2a6.01 6.01 0 0 0-6 6c0 3.306 2.694 6 6 6s6-2.694 6-6-2.694-6-6-6Zm2.61 8.142a.448.448 0 0 1-.618.156l-1.86-1.11c-.462-.276-.804-.882-.804-1.416v-2.46c0-.246.204-.45.45-.45.246 0 .45.204.45.45v2.46c0 .216.18.534.366.642l1.86 1.11a.444.444 0 0 1 .156.618Z"
      fill={props.fill || "#3B5CB0"}
    />
  </svg>
);
export default SvgPending;
