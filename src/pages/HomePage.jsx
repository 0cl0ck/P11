import React from "react";
import Banner from "../components/Banner.Jsx";
import ApartmentGrid from "../components/ApartmentGrid.jsx";
import "../components/Banner.scss";

function HomePage() {
  return (
    <>
      <Banner
        backgroundImage="/illustration-banner.webp"
        title="Chez vous, partout et ailleurs"
      />
      <ApartmentGrid />
    </>
  );
}

export default HomePage;
