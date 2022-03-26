import Card from "./components/Card";
import "./App.css";
import styled from "@emotion/styled";
import { useEffect, useMemo, useState } from "react";
import Switch from "./components/Switch";
import * as Animals from "./images/animals";
import Timer from "./components/Timer";
import Fullscreen from "./components/Fullscreen";
import { Mode } from "./types";
// import Controls from "./components/Contols";

const Categories = {
  Animals,
  // Fruits
};

function App() {
  const [mode, setMode] = useState<Mode>("dark");
  const [index, setIndex] = useState(0);
  const categoryModules = Categories["Animals"];
  const pictures = useMemo(
    () => Object.values(categoryModules),
    [categoryModules]
  );
  const Picture = pictures[index];
  const name = Object.keys(Categories.Animals)[index];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = index + 1;
      const adjustedIndex = nextIndex >= pictures.length ? 0 : nextIndex;
      setIndex(adjustedIndex);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [pictures, index]);

  return (
    <div className={`App-${mode} App`}>
      <Switch mode={mode} setMode={setMode} />
      <Card mode={mode}>
        <Picture mode={mode} />
      </Card>
      <Name mode={mode}>{name}</Name>
      {/* <Controls index={index} setIndex={setIndex} mode={mode} /> */}
      <Fullscreen mode={mode} />
      <Timer key={index} mode={mode} />
    </div>
  );
}

const Name = styled.div<{ mode: Mode }>`
  text-transform: uppercase;
  font-size: 2.5rem;
  margin-top: 2rem;
  font-weight: bold;
  color: ${({ mode }) => (mode === "light" ? "black" : "white")};
  @media (min-width: 460px) {
    font-size: 4rem;
  }
`;

export default App;
