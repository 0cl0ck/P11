import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card(props) {
  const cardStyle = {
    backgroundImage: `url(${props.cover})`,
  };

  return (
    <>
      <Link to="/ApartmentPage" className="card__link" style={cardStyle}>
        <span className="card__subtitle">{props.title}</span>
      </Link>
    </>
  );
}

export default Card;
