import * as React from "react";
const BuyCrypto = (props) => {
  if (props?.enabled) {
    return (
      <svg
        width="24"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M22 9.074a6.5 6.5 0 0 1-7.02 6.48 6.509 6.509 0 0 0-5.96-5.96A6.5 6.5 0 1 1 22 9.074Z"
          stroke="#365069"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 16.074a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
          stroke="#F26841"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m7.62 15.194.88-1.62.88 1.62 1.62.88-1.62.88-.88 1.62-.88-1.62-1.62-.88 1.62-.88Z"
          stroke="#F26841"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
        stroke={props?.stroke ?? "#afb9c3"}
        strokeWidth="1.5"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M22 8.648a6.5 6.5 0 0 1-6.5 6.5c-.17 0-.35-.01-.52-.02a6.51 6.51 0 0 0-5.96-5.96L9 8.648a6.5 6.5 0 1 1 13 0z" />
        <path d="M15 15.648a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 6.5-6.5l.52.02a6.51 6.51 0 0 1 5.96 5.96l.02.52z" />
        <path d="M7.62 14.768l.88-1.62.88 1.62 1.62.88-1.62.88-.88 1.62-.88-1.62-1.62-.88 1.62-.88z" />
      </svg>
    );
  }
};
export default BuyCrypto;
