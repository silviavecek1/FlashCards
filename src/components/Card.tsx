import React from "react";
import styled from "@emotion/styled";
import { Mode } from "../types";

type CardProps = {
  mode: Mode;
  children: React.ReactNode;
};

const Card = ({ mode, children }: CardProps) => {
  return <CardStyled mode={mode}>{children}</CardStyled>;
};

export default Card;

const CardStyled = styled.div<{ mode: Mode }>`
  border-radius: 2rem;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  max-width: 600px;
  background-color: ${({ mode }) => (mode === "light" ? "white" : "black")};
  border: ${({ mode }) =>
    mode === "light" ? "1rem solid black;" : "1rem solid white"};
  color: ${({ mode }) => (mode === "light" ? "black" : "white")};
`;
