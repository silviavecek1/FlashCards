import React from "react";
import styled from "@emotion/styled";
import MemoMoon from "../images/switch/moon";
import MemoSun from "../images/switch/sun";
import { Mode } from "../types";

type SwitchProps = {
  setMode: (mode: Mode) => void;
  mode: Mode;
};

const Switch = ({ setMode, mode }: SwitchProps) => {
  return (
    <Button
      mode={mode}
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      {mode === "dark" ? <MemoSun /> : <MemoMoon />}
    </Button>
  );
};

export default Switch;

const Button = styled.button<{ mode: Mode }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-items: center;
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${({ mode }) => (mode === "dark" ? "white" : "black")};
  border: ${({ mode }) =>
    mode === "dark" ? "3px solid white;" : "3px solid black"};
`;
