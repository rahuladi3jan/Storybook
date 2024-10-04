import * as React from "react";
const SvgStatusProgress = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="10" fill="#FFF1DE" />
    <ellipse cx="12" cy="12" rx="8" ry="8" fill="#FFE2BE" />
    <circle cx="12" cy="12" r="5" fill="#FFB75C" />
  </svg>
);
export default SvgStatusProgress;
