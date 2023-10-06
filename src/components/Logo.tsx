import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        <g id="K" transform="translate(35.000000, 35.000000)">
          <path
            fill="currentColor"
             
            d = "M7 3a1 1 0 0 0-.323.023C5.237 3.141 4 4.432 4 6c0 1.57 1.24 2.864 2.783 2.979A1 1 0 0 0 7 9h2c.571 0 1 .429 1 1s-.429 1-1 1H5a1 1 0 1 0 0 2h4a1 1 0 0 0 .223-.023C10.763 12.859 12 11.569 12 10c0-1.57-1.24-2.864-2.783-2.979A1 1 0 0 0 9 7H7c-.571 0-1-.429-1-1s.429-1 1-1h4a1 1 0 1 0 0-2H7z"
          />
        </g>
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
        />
      </g>
    </svg>
  );
}

export default Logo;
