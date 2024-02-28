import React from "react";
import style from "./Card.module.css";

const Card = ({ children }) => {
  return (
    <div className={`${style.container}`}>
      <div
        className={`${style.cardContainer} shadow p-4 bg-body-tertiary rounded`}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
