import * as React from "react";
import { SVGProps } from "react";

const SvgRabbit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 126 103"
    fill="currentColor"
    height="80%"
    width="80%"
    {...props}
  >
    <path d="M0 88.6c0 6.4 4.8 14 27.5 14h81.9l-.1-1.7c1.6 1.1 3.6 1.7 5.7 1.7 5.8 0 10.5-4.7 10.5-10.5s-4.7-10.5-10.5-10.5c-2.8 0-5.4 1.1-7.3 2.9-2.9-14.7-10.7-26.9-31.7-28-14.3-.8-25.4 5-33 10.3L16.9.8l-2.2 5.7c-11.3 28.6-1 46 8.9 55.2C12.7 64.5 0 78.3 0 88.6Zm115.1-2.3c3.2 0 5.7 2.6 5.7 5.7 0 3.2-2.6 5.7-5.7 5.7-3.2 0-5.7-2.6-5.7-5.7s2.6-5.7 5.7-5.7ZM75.9 61.2c19 1 27.4 11.6 28.6 36.5H60c3-3.1 9.5-3.7 9.6-3.7l2.9-.2-.8-2.8c0-.1-1.6-6.2 3.5-10.6 5.8-5 16.3 1.1 16.4 1.2l2.5-4.1c-.6-.3-13.6-8-22-.7-5 4.3-5.6 9.7-5.4 12.9-3.7.7-10.3 2.7-12.3 8.1H40.9c4.6-3.8 7.5-9.5 7.5-15.9 0-3.9-1.1-7.6-3-10.8 7-5 17.3-10.6 30.5-9.9Zm-58.8-47 19.3 48.9c-1.7-.8-3.6-1.4-5.6-1.7-10.7-8-21.2-22.5-13.7-47.2Zm10.4 51.7c8.8 0 15.9 7.2 15.9 15.9 0 8.8-7.2 15.9-15.9 15.9-10.3 0-22.7-1.6-22.7-9.2.1-8.8 13.8-22.6 22.7-22.6Z" />
  </svg>
);

export default SvgRabbit;
