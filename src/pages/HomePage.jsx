import React from "react";
import Banner from "../components/Banner.Jsx";
import LocationGrid from "../components/LocationGrid.jsx";
import "./HomePage.scss";
import "../components/Banner.scss";

function HomePage() {
  return (
    <>
      <Banner
        backgroundImage="/illustration-banner.webp"
        title="Chez vous, partout et ailleurs"
      />
      <LocationGrid />
    </>
  );
}

export default HomePage;
