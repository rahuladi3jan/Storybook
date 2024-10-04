import * as React from "react";
import { SVGProps } from "react";
const SvgLoanInstant = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="36" cy="36" r="36" fill="url(#paint0_linear_11038_54763)" />
    <g clipPath="url(#clip0_11038_54763)">
      <path
        d="M51.1406 36.0001C51.1406 44.7109 44.0791 51.7724 35.3683 51.7724C26.6575 51.7724 19.596 44.7109 19.596 36.0001C19.596 27.2893 26.6575 20.2278 35.3683 20.2278C37.4568 20.2278 39.4505 20.6337 41.2748 21.371"
        stroke="#F26841"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.8984 28.3783L45.4034 31.8832L52.4133 24.8733"
        stroke="#F26841"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.3385 27.252V34.056H42.1706L34.3945 44.748V37.944H28.5625L36.3385 27.252Z"
        stroke="#F26841"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_11038_54763"
        x1="36"
        y1="0"
        x2="36"
        y2="72"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F26841" stopOpacity="0.1" />
        <stop offset="1" stopColor="#F26841" stopOpacity="0" />
      </linearGradient>
      <clipPath id="clip0_11038_54763">
        <rect
          width="44"
          height="44"
          fill="white"
          transform="translate(14 14)"
        />
      </clipPath>
    </defs>
  </svg>
);
//(SvgLoanInstant);
export default SvgLoanInstant;
