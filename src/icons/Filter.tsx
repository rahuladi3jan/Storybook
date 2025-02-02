import * as React from "react";
import { SVGProps } from "react";
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={17}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.548 3.704c-.252 0-.51.223-.51.603v1.09c0 .07.026.193.087.336.06.14.137.263.209.34l.007.007 1.7 1.894a2.308 2.308 0 0 1 .32.585c.077.203.137.442.137.672v2.509c0 .453.47.684.792.478l.622-.424.01-.007c.03-.019.09-.08.145-.192a.695.695 0 0 0 .077-.281V9.278c0-.247.057-.51.151-.745.093-.23.233-.464.424-.634l1.91-1.787c.071-.078.157-.21.225-.369.07-.164.108-.323.108-.441V4.26c0-.32-.246-.556-.51-.556H5.548Zm-1.279.603c0-.755.548-1.384 1.28-1.384h5.903c.72 0 1.279.616 1.279 1.337v1.042c0 .26-.075.527-.172.753a2.127 2.127 0 0 1-.4.623l-1.923 1.798-.008.008a.93.93 0 0 0-.22.344 1.265 1.265 0 0 0-.095.45v2.036c0 .216-.065.441-.158.63-.09.182-.229.379-.419.502l-.628.427c-.842.549-1.979-.073-1.979-1.133V9.23c0-.101-.03-.241-.086-.392a1.564 1.564 0 0 0-.183-.352L4.775 6.61a1.97 1.97 0 0 1-.357-.567 1.725 1.725 0 0 1-.149-.646V4.307Z"
      fill="#365069"
      stroke="#365069"
      strokeWidth=".2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFilter;
