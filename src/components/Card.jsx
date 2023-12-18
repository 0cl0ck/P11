import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card(props) {
  const cardStyle = {
    backgroundImage: `url(${props.cover})`,
  };

  const state = { id: props.id };

  return (
    <>
      <Link
        to="/ApartmentPage"
        state={state}
        className="card__link"
        style={cardStyle}
      >
        <span className="card__subtitle">{props.title}</span>
      </Link>
    </>
  );
}

export default Card;
