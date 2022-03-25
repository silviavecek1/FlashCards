import React from "react";
import "../styles/Card.css";

type CardProps = {
  mode: string;
  children: React.ReactNode;
};

const Card = ({ mode, children }: CardProps) => {
  return <div className={`card-${mode} card`}>{children}</div>;
};

export default Card;
