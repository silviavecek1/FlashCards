import * as React from "react";
import { SVGProps } from "react";

const SvgDog = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 108 108"
    fill="currentColor"
    height="80%"
    width="80%"
    {...props}
  >
    <path d="M22.3 54.3c-5.6 0-4.6 4 0 6.5 4.6-2.5 5.5-6.5 0-6.5Z" />
    <path d="M.3 56.7v.5l.2.4C1.3 59.3 6.8 71 14.9 76v31.9h16.5v-12c0-.6.5-1.1 1.1-1.1h34.9c.6 0 1.1.5 1.1 1.1v12H85V73.3c0-2.5-.4-5-1.1-7.3.8.1 1.5.1 2.3.1 7 0 13.1-2.6 16.9-7.3 3.5-4.4 8.1-14.7-1.2-33.6l-2.2-4.4-2.4 4.3c-1.8 3.2-5.4 5.3-9.2 7.5-6.6 3.8-14.5 8.4-14.4 20.3-3.7-2.4-8.2-3.7-12.9-3.7H44.2c-.2-3.3-.9-7.2-2.2-11 0-2.8-.2-16.3-4.4-31.2L35.7.1l-3 6.6c-3.2 7-5.1 13.9-5.9 17.6-1.4-.3-3-.4-4.5-.4-1.6 0-3.1.2-4.5.5-.9-3.7-2.7-10.7-5.9-17.7L8.9.1 7 7C2.9 21.9 2.9 35.4 3 38.2-.4 46.7.2 56.1.3 56.7Zm90.4-19.6c2.9-1.7 5.9-3.4 8.3-5.7 4.3 10.4 4.4 18.9.1 24.2-3.6 4.5-10.4 6.4-17.7 4.9-.6-.9-1.2-1.7-1.8-2.5-2.7-13 3.7-16.7 11.1-20.9ZM44 57.6l.2-.4v-.4c0-.2.1-1.1.1-2.5h16.4c10.5 0 19 8.5 19 19v29.4h-6v-6.8c0-3.5-2.9-6.4-6.4-6.4H32.4c-3.5 0-6.4 2.9-6.4 6.4v6.8h-6V78.2c.7.1 1.4.2 2.2.2C34.3 78.3 43 59.7 44 57.6Zm-9.5-41.3c.9 4.7 1.5 9.1 1.8 12.6-1.3-1.3-2.8-2.3-4.5-3.2.4-2 1.3-5.4 2.7-9.4Zm-24.5.1c1.4 4 2.2 7.5 2.7 9.5-1.6.8-3 1.9-4.4 3.2.3-3.5.8-7.9 1.7-12.7Zm1.7 16.8c2.7-2.9 6.2-4.3 10.6-4.3 4.7 0 8.4 1.5 11.1 4.5 6.3 7 5.8 19.9 5.7 22.4-2.4 5.2-9.6 17.3-16.8 17.3-7.2 0-14.4-12-16.8-17.2-.1-2.6-.3-15.8 6.2-22.7Z" />
  </svg>
);

export default SvgDog;
