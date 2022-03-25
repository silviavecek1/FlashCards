import * as React from "react";
import { SVGProps } from "react";

const SvgLadybug = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 86 101"
    fill="currentColor"
    height="80%"
    width="80%"
    {...props}
  >
    <g transform="translate(.8 .2)">
      <path d="M0 58.2c0 23.3 19 42.3 42.3 42.3 23.3 0 42.3-19 42.3-42.3 0-18.3-11.7-33.9-28-39.8-.3-3.5-1.8-6.6-4.1-8.9l4.1-6.8L52.1 0l-3.9 6.5c-1.9-.9-3.9-1.4-6.1-1.4-2.1 0-4.2.5-6 1.3L32.2 0l-4.5 2.7 4 6.7c-2.3 2.4-3.9 5.5-4.2 9C11.6 24.3 0 39.9 0 58.2Zm79.4 0c0 19.6-15.3 35.7-34.5 37v-74c19.3 1.3 34.5 17.4 34.5 37ZM42.3 10.3c4.1 0 7.6 2.7 8.8 6.5-2.8-.6-5.8-.9-8.8-.9-3.1 0-6 .3-8.9 1 1.2-3.9 4.7-6.6 8.9-6.6Zm-2.6 10.9v74c-19.2-1.3-34.5-17.4-34.5-37s15.3-35.7 34.5-37Z" />
      <circle cx={28.6} cy={37.3} r={4.3} />
      <circle cx={14.4} cy={52.7} r={4.3} />
      <circle cx={30.2} cy={61.3} r={4.3} />
      <circle cx={21.6} cy={78.7} r={4.3} />
      <circle cx={56} cy={37.3} r={4.3} />
      <circle cx={70.3} cy={52.7} r={4.3} />
      <circle cx={54.5} cy={61.3} r={4.3} />
      <circle cx={63.1} cy={78.7} r={4.3} />
    </g>
  </svg>
);

export default SvgLadybug;
