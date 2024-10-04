import * as React from "react";
import { SVGProps } from "react";
const SvgTick = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM13.5177 5.88741C13.3168 5.68776 12.9914 5.68766 12.7904 5.8872L7.61256 11.026L5.21015 8.63752C5.00928 8.43781 4.68391 8.43762 4.4828 8.63709C4.28105 8.83721 4.28085 9.16235 4.48237 9.3627L7.24835 12.1127C7.34496 12.2088 7.4758 12.2626 7.61201 12.2626C7.74822 12.2627 7.87911 12.209 7.9758 12.113L13.5175 6.61302C13.7192 6.41285 13.7193 6.08771 13.5177 5.88741Z"
      fill="#349E58"
    />
  </svg>
);
//(SvgTick);
export default SvgTick;
