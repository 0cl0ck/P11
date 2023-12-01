import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="card">
      <Link to="/flat" className="card__link">
        <span className="card__subtitle">Titre de la Location</span>
      </Link>
    </div>
  );
}

export default Card;
