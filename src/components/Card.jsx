import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Card(props) {
  const cardStyle = {
    backgroundImage: `url(${props.cover})`,
  };

  return (
    <>
      <Link
        to={`/apartment/${props.id}`}
        className="card__link"
        style={cardStyle}
      >
        <span className="card__subtitle">{props.title}</span>
      </Link>
    </>
  );
}
Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};
export default Card;
