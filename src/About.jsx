import React from "react";
import "./about.scss";
import Banner from "./components/Banner.Jsx";
import ApartmentDetails from "./components/ApartmentDetails";

function About() {
  return (
    <>
      <Banner
        backgroundImage="/illustration-banner-about.webp"
        title="Chez vous, partout et ailleurs"
      />
      <ApartmentDetails />
      <ApartmentDetails />
      <ApartmentDetails />
      <ApartmentDetails />
    </>
  );
}

export default About;
