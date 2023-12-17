import React from "react";
import "./Banner.scss";

function Banner({ backgroundImage, title }) {
  const style = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="banner" style={style}>
      <h2>{title}</h2>
    </div>
  );
}

export default Banner;
