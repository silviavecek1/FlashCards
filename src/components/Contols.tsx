import { Next, Play, Previous } from "../images/controls";
import styled from "@emotion/styled";
import { Mode } from "../types";

type ControlsProps = {
  setIndex: (value: React.SetStateAction<number>) => void;
  index: number;
  mode: Mode;
};

const Controls = ({ setIndex, index, mode }: ControlsProps) => {
  const fill = mode === "light" ? "black" : "white";
  return (
    <Container>
      <Button onClick={() => setIndex((value) => value - 1)}>
        <Previous fill={fill} />
      </Button>
      <Button onClick={() => setIndex(index)}>
        <Play fill={fill} />
      </Button>
      <Button onClick={() => setIndex((value) => value + 1)}>
        <Next fill={fill} />
      </Button>
    </Container>
  );
};

export default Controls;

const Container = styled.div`
  max-width: 500px;
  width: 80%;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  height: 72px;
  width: 72px;
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
