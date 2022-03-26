import { Next, Play, Previous } from "../images/controls";
import "../styles/Controls.css";

type ControlsProps = {
  setIndex: (value: number) => void;
  index: number;
  mode: string;
};

const Controls = ({ setIndex, index, mode }: ControlsProps) => {
  const fill = mode === "light" ? "black" : "white";
  return (
    <div className="control-container">
      <button className={`control`} onClick={() => setIndex(index - 1)}>
        <Previous fill={fill} />
      </button>
      <button className={`control`} onClick={() => setIndex(index)}>
        <Play fill={fill} />
      </button>
      <button className={`control`} onClick={() => setIndex(index + 1)}>
        <Next fill={fill} />
      </button>
    </div>
  );
};

export default Controls;
