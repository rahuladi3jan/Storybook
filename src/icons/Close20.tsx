import * as React from "react";
import { SVGProps } from "react";
const SvgClose20 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.13518 4.13518C4.31542 3.95494 4.60765 3.95494 4.7879 4.13518L10 9.34729L15.2121 4.13518C15.3923 3.95494 15.6846 3.95494 15.8648 4.13518C16.0451 4.31542 16.0451 4.60765 15.8648 4.7879L10.6527 10L15.8648 15.2121C16.0451 15.3923 16.0451 15.6846 15.8648 15.8648C15.6846 16.0451 15.3923 16.0451 15.2121 15.8648L10 10.6527L4.7879 15.8648C4.60765 16.0451 4.31542 16.0451 4.13518 15.8648C3.95494 15.6846 3.95494 15.3923 4.13518 15.2121L9.34729 10L4.13518 4.7879C3.95494 4.60765 3.95494 4.31542 4.13518 4.13518Z"
      fill={props?.color ? props.color : "white"}
    />
  </svg>
);
export default SvgClose20;
