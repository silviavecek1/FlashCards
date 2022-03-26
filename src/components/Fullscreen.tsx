import React, { useCallback, useEffect, useState } from "react";
import { FullscreenExit, FullscreenOpen } from "../images/controls";
import "../styles/Fullscreen.css";

type FullscreenProps = {
  mode: string;
};

const Fullscreen = ({ mode }: FullscreenProps) => {
  const [fullscreen, setFullScreen] = useState(!!document.fullscreenElement);

  const handleFullScreen = useCallback(() => {
    if (document.fullscreenElement) {
      console.log("exiting");
      setFullScreen(false);
      document.exitFullscreen();
    } else {
      console.log("opening");
      setFullScreen(true);
      document.body.requestFullscreen();
    }
  }, []);

  const handleUserKeyPress = useCallback((event) => {
    if (event.keyCode === 70) {
      console.log("f is pressed");
      handleFullScreen();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullScreen);
    document.addEventListener("webkitfullscreenchange", handleFullScreen);
    document.addEventListener("mozfullscreenchange", handleFullScreen);
    document.addEventListener("MSFullscreenChange", handleFullScreen);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreen);
      document.removeEventListener("webkitfullscreenchange", handleFullScreen);
      document.removeEventListener("mozfullscreenchange", handleFullScreen);
      document.removeEventListener("MSFullscreenChange", handleFullScreen);
    };
  }, [handleFullScreen]);

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const fill = mode === "light" ? "black" : "white";

  return (
    <button
      className={`fullscreen-${mode} fullscreen`}
      onClick={handleFullScreen}
    >
      {fullscreen ? (
        <FullscreenOpen fill={fill} />
      ) : (
        <FullscreenExit fill={fill} />
      )}
    </button>
  );
};

export default Fullscreen;
