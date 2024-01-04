import React from "react";
import PropTypes from "prop-types";

function ApartmentBanner({ cover }) {
  return (
    <div className="apartment__banner">
      <img src={cover} alt="Apartment Banner" />
    </div>
  );
}
ApartmentBanner.propTypes = {
  cover: PropTypes.string.isRequired,
};

export default ApartmentBanner;
