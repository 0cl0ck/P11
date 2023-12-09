import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card() {
  return (
    <>
      <Link to="/ApartmentPage" className="card__link">
        <span className="card__subtitle">Titre de la Location</span>
      </Link>
    </>
  );
}

export default Card;
