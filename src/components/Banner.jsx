import React from "react";
import "./Banner.scss";
import PropTypes from "prop-types";

function Banner({ backgroundImage, title, additionalStyle }) {
  const style = {
    backgroundImage: `url(${backgroundImage})`,
    ...additionalStyle,
  };

  return (
    <div className="banner" style={style}>
      <h2>{title}</h2>
    </div>
  );
}
Banner.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  additionalStyle: PropTypes.object,
};

export default Banner;
