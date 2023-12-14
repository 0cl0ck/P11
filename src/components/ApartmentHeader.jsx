import React from "react";

function ApartmentHeader() {
  return (
    <div className="apartment__header">
      <div className="apartment__title">
        <h1>Cozy loft on Canal Saint Martin</h1>
        <h2>Paris, île de France</h2>
        <div className="tags">
          <p>Cozy</p>
          <p>Canal</p>
          <p>Paris 10</p>
        </div>
      </div>
      <div className="apartment__landlord">
        <div className="apartment__landlord--header">
          <div className="apartment__landlord--name">
            <p className="apartment__landlord--firstname">Alexandre </p>
            <p className="apartment__landlord--lastname"> Dumas</p>
          </div>
          <div className="apartment__landlord--avatar">
            <img src="grey.webp" alt="" />
          </div>
        </div>
        <div className="apartment__landlord--rating">
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </div>
      </div>
    </div>
  );
}

export default ApartmentHeader;
