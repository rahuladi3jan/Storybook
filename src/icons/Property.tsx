import * as React from "react";
import { SVGProps } from "react";
const SvgProperty = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_4911_87150)">
      <path
        d="M25.4753 5.14227L10.2601 2.78045C9.72928 2.69805 9.2322 3.06154 9.1498 3.59232L5.84563 24.8782C5.76324 25.409 6.12673 25.9061 6.65751 25.9885L21.8728 28.3503C22.4035 28.4327 22.9006 28.0692 22.983 27.5384L26.2872 6.25253C26.3695 5.72175 26.006 5.22467 25.4753 5.14227Z"
        fill="#AFB9C3"
      />
      <path
        d="M6.1474 6.24902H21.6847C22.0923 6.24902 22.4161 6.57333 22.416 6.96523V28.3661C22.416 28.758 22.0923 29.0824 21.6846 29.0824H6.1474C5.73978 29.0824 5.41602 28.758 5.41602 28.3661V6.96526C5.41602 6.57333 5.73978 6.24902 6.1474 6.24902Z"
        fill="url(#paint0_linear_4911_87150)"
        stroke="url(#paint1_linear_4911_87150)"
        strokeWidth="0.5"
      />
      <rect
        x="8.5"
        y="9.3335"
        width="10.8333"
        height="1.66667"
        rx="0.833333"
        fill="white"
      />
      <rect
        x="8.5"
        y="12.6667"
        width="10.8333"
        height="1.66667"
        rx="0.833333"
        fill="white"
      />
      <rect
        x="8.5"
        y="16"
        width="10.8333"
        height="1.66667"
        rx="0.833333"
        fill="white"
      />
      <rect
        x="8.5"
        y="19.3335"
        width="8.33333"
        height="1.66667"
        rx="0.833333"
        fill="white"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_4911_87150"
        x1="13.916"
        y1="5.99902"
        x2="13.916"
        y2="29.3324"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EBEEF0" />
        <stop offset="1" stopColor="#AFB9C3" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_4911_87150"
        x1="5.99935"
        y1="6.41569"
        x2="22.666"
        y2="27.6657"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <clipPath id="clip0_4911_87150">
        <rect
          width="26.6667"
          height="26.6667"
          fill="white"
          transform="translate(2.66602 2.66675)"
        />
      </clipPath>
    </defs>
  </svg>
);
//(SvgProperty);
export default SvgProperty;
