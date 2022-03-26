import * as React from "react";
import { SVGProps } from "react";

const SvgFullscreenExit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 32 32"
    height="80%"
    width="80%"
    {...props}
  >
    <path d="M4 12h8V4m8 0v8h8M4 20h8v8m16-8h-8v8" />
  </svg>
);

export default SvgFullscreenExit;
