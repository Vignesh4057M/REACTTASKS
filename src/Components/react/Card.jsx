import React from "react";
import "./Card.css";

const Card = ({ title, onClick }) => {
  return (
    <div className="dashboard-card" onClick={onClick}>
      <p className="dashboard-card-title">{title}</p>
    </div>
  );
};

export default Card;
