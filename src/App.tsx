import Card from "./components/Card";
import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Switch from "./components/Switch";
import * as Animals from "./images/animals";
import Timer from "./components/Timer";
import Fullscreen from "./components/Fullscreen";
// import Controls from "./components/Contols";

const Categories = {
  Animals,
  // Fruits
};

function App() {
  const [mode, setMode] = useState("dark");
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
      <div className={`name name-${mode}`}>{name}</div>
      {/* <Controls index={index} setIndex={setIndex} mode={mode} /> */}
      <Fullscreen mode={mode} />
      <Timer key={index} mode={mode} />
    </div>
  );
}

export default App;
