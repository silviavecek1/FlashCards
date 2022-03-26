import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { FullscreenExit, FullscreenOpen } from "../images/controls";

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
  }, [toggleFullScreen]);

  const fill = mode === "light" ? "black" : "white";

  return (
    <Button onClick={toggleFullScreen}>
      {fullscreen ? (
        <FullscreenExit stroke={fill} height={42} width={42} fill="none" />
      ) : (
        <FullscreenOpen fill={fill} height={36} width={36} />
      )}
    </Button>
  );
};

export default Fullscreen;

const Button = styled.button`
  background: none;
  border: none;
  max-height: 50px;
  cursor: pointer;
  position: absolute;
  bottom: 2rem;
  right: 1rem;
  svg {
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
