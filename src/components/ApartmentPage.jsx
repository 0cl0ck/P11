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
      <ApartmentDetails />
    </div>
  );
}

export default ApartmentPage;
