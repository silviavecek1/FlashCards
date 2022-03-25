import React from "react";
import MemoMoon from "../images/moon";
import MemoSun from "../images/sun";
import "../styles/Switch.css";

type SwitchProps = {
  setMode: (value: string) => void;
  mode: string;
};

const Switch = ({ setMode, mode }: SwitchProps) => {
  return (
    <button
      className={`button-${mode} button`}
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      {mode === "dark" ? <MemoSun /> : <MemoMoon />}
    </button>
  );
};

export default Switch;
