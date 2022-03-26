import React, { useCallback, useEffect, useState } from "react";
import { FullscreenExit, FullscreenOpen } from "../images/controls";
import "../styles/Fullscreen.css";

type FullscreenProps = {
  mode: string;
};

const Fullscreen = ({ mode }: FullscreenProps) => {
  const [fullscreen, setFullScreen] = useState(!!document.fullscreenElement);

  const toggleFullScreen = useCallback(async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.body.requestFullscreen();
    }
  }, []);

  useEffect(() => {
    const syncFullscreen = () => setFullScreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", syncFullscreen);
    document.addEventListener("webkitfullscreenchange", syncFullscreen);
    document.addEventListener("mozfullscreenchange", syncFullscreen);
    document.addEventListener("MSFullscreenChange", syncFullscreen);
    return () => {
      document.removeEventListener("fullscreenchange", syncFullscreen);
      document.removeEventListener("webkitfullscreenchange", syncFullscreen);
      document.removeEventListener("mozfullscreenchange", syncFullscreen);
      document.removeEventListener("MSFullscreenChange", syncFullscreen);
    };
  }, []);

  useEffect(() => {
    const handleUserKeyPress = (event: KeyboardEvent) => {
      if (event.key === "f") {
        toggleFullScreen();
      }
    };
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, []);

  const fill = mode === "light" ? "black" : "white";

  return (
    <button
      className={`fullscreen-${mode} fullscreen`}
      onClick={toggleFullScreen}
    >
      {fullscreen ? (
        <FullscreenExit fill={fill} />
      ) : (
        <FullscreenOpen fill={fill} />
      )}
    </button>
  );
};

export default Fullscreen;
