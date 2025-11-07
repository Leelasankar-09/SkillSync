import React from "react";

type CardProps = {
  children: React.ReactNode;
  bg?: string;
  borderColor?: string;
  className?: string;
};

const Card: React.FC<CardProps> = ({
  children,
  bg = "#d9d9d9",
  borderColor = "transparent",
  className = "",
}) => {
  return (
    <div
      className={`card ${className}`}
      style={{ background: bg, border: `2px solid ${borderColor}` }}
    >
      <div className="card-body">
        <div className="card-line" />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Card;