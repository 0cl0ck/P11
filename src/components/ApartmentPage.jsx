import React from "react";
import "./ApartmentPage.scss";
import ApartmentBanner from "./ApartmentBanner";
import ApartmentHeader from "./ApartmentHeader";
import ApartmentDetails from "./ApartmentDetails";

function ApartmentPage() {
  return (
    <div className="apartment__page">
      <ApartmentBanner />
      <ApartmentHeader />

      <div className="apartment__details">
        <ApartmentDetails />
        <ApartmentDetails />
      </div>
    </div>
  );
}

export default ApartmentPage;
