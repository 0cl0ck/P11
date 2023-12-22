import React, { useState, useEffect } from "react";
import "./ApartmentPage.scss";
import "./carousel.scss";
import ApartmentHeader from "./ApartmentHeader";
import InformationSection from "./InformationSection";
import Carousel from "./Carousel.jsx";
import { useParams } from "react-router-dom";

function ApartmentPage() {
  const [apartment, setApartment] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    fetch("../src/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const foundApartment = data.find((apt) => apt.id === id);
        setApartment(foundApartment);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="apartment__page">
      {apartment ? (
        <>
          <Carousel images={apartment.pictures} />
          <ApartmentHeader
            title={apartment.title}
            location={apartment.location}
            tags={apartment.tags}
            host={apartment.host}
            rating={parseInt(apartment.rating)}
          />
          <div className="apartment__details">
            <InformationSection
              title="Description"
              content={apartment.description}
            />
            <InformationSection
              title="Équipements"
              content={apartment.equipments}
            />
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ApartmentPage;
