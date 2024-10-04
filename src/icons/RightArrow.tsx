import React from "react";

function RightArrow(props) {
  const { color = "currentColor" } = props;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="arrow-right">
        <path
          id="Vector"
          d="M12.0249 4.94141L17.0832 9.99974L12.0249 15.0581"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M2.91675 10H16.9417"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
//(RightArrow);
export default RightArrow;
