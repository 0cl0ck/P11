import React from "react";
import "./ApartmentCard.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ApartmentCard(props) {
  const ApartmentCardStyle = {
    backgroundImage: `url(${props.cover})`,
  };

  return (
    <>
      <Link
        to={`/apartment/${props.id}`}
        className="ApartmentCard__link"
        style={ApartmentCardStyle}
      >
        <span className="ApartmentCard__subtitle">{props.title}</span>
      </Link>
    </>
  );
}
ApartmentCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};
export default ApartmentCard;
