import React, { useState, useEffect } from "react";
import "./ApartmentPage.scss";
import "../components/Carousel.scss";
import ApartmentHeader from "../components/ApartmentHeader.jsx";
import InformationSection from "../components/InformationSection.jsx";
import Carousel from "../components/Carousel.jsx";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ApartmentPage() {
  const [apartment, setApartment] = useState(null);
  const navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    fetch("../src/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const foundApartment = data.find((apt) => apt.id === id);
        if (foundApartment) {
          setApartment(foundApartment);
        } else {
          navigate("/404", { replace: true });
        }
      })
      .catch((error) => {
        console.error(error);
        navigate("/404", { replace: true });
      });
  }, [id, navigate]);

  if (!apartment) {
    return <div>Chargement...</div>;
  }
  return (
    <div className="apartment__page">
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
    </div>
  );
}

export default ApartmentPage;
