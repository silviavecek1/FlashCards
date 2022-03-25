import React, { useEffect } from "react";
import "../styles/Timer.css";

type TimerProps = {
  mode: string;
};

const Timer = ({ mode }: TimerProps) => {
  return (
    <div className="timer">
      <div className={`timer-${mode} timer`}></div>
    </div>
  );
};

export default Timer;
