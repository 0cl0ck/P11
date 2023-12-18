import React from "react";
import "./ApartmentPage.scss";
import ApartmentBanner from "./ApartmentBanner";
import ApartmentHeader from "./ApartmentHeader";
import ApartmentDetails from "./ApartmentDetails";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function ApartmentPage() {
  const location = useLocation();
  const apartmentId = location.state?.id;
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    fetch("./src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundApartment = data.find((apt) => apt.id === apartmentId);
        setApartment(foundApartment);
      })
      .catch((error) => console.error(error));
  }, [apartmentId]);

  return (
    <div className="apartment__page">
      {apartment && (
        <>
          <ApartmentBanner cover={apartment.cover} />
          <ApartmentHeader
            title={apartment.title}
            location={apartment.location}
            tags={apartment.tags}
            host={apartment.host}
            rating={parseInt(apartment.rating)}
          />

          <div className="apartment__details">
            <ApartmentDetails
              title="Description"
              content={apartment.description}
            />
            <ApartmentDetails
              title="Equipements"
              content={apartment.equipments}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default ApartmentPage;
