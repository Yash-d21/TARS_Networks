import * as React from "react"

export const TarsLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 350 70"
    width="120"
    height="24"
    {...props}
  >
    <text
      x={0}
      y={55}
      fontFamily="Poppins, sans-serif"
      fontSize={60}
      fontWeight="bold"
      fill="currentColor"
    >
      T
    </text>
    <g transform="translate(70, 10) scale(0.8)">
      <path
        d="M 25 0 L 0 50 L 10 50 L 35 0 Z"
        fill="currentColor"
        transform="rotate(15 25 25)"
      />
      <path
        d="M 25 0 L 0 50 L 10 50 L 35 0 Z"
        fill="currentColor"
        transform="rotate(-5 25 25) translate(10 0)"
      />
      <path
        d="M 25 0 L 0 50 L 10 50 L 35 0 Z"
        fill="currentColor"
        transform="rotate(-25 25 25) translate(20 0)"
      />
    </g>
    <text
      x={145}
      y={55}
      fontFamily="Poppins, sans-serif"
      fontSize={60}
      fontWeight="bold"
      fill="currentColor"
    >
      RS
    </text>
  </svg>
)
