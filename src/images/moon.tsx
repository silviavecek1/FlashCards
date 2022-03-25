import * as React from "react";

const Moon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      className="prefix__bkg2--stroke"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="white"
      {...props}
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
};

const MemoMoon = React.memo(Moon);
export default MemoMoon;
