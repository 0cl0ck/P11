import React from "react";

function ApartmentBanner({ cover }) {
  return (
    <div className="apartment__banner">
      <img src={cover} alt="Apartment Banner" />
    </div>
  );
}

export default ApartmentBanner;
