import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Mode } from "../types";

type TimerProps = {
  mode: Mode;
};

const Timer = ({ mode }: TimerProps) => {
  return <TimerBar mode={mode}></TimerBar>;
};

export default Timer;

const grow = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100vw;
  }
`;

const TimerBar = styled.div<{ mode: Mode }>`
  height: 1rem;
  width: 100vw;
  position: absolute;
  left: 0;
  bottom: 0;
  animation-name: ${grow};
  animation-duration: 6s;
  animation-timing-function: linear;
  background-color: ${({ mode }) => (mode === "light" ? "black" : "white")};
`;
