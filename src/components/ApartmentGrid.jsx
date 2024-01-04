import React from "react";
import "./ApartmentGrid.scss";
import ApartmentCard from "./ApartmentCard.jsx";
import { useState, useEffect } from "react";

function ApartmentGrid() {
  const [apartments, setApartments] = useState([]);
  useEffect(fetchApartments, []);

  function fetchApartments() {
    fetch("./src/data.json")
      .then((response) => response.json())
      .then((data) => setApartments(data))
      .catch((error) => console.error(error));
  }

  //Todo: renommer ApartmentCard en + spécifique

  return (
    <div className="apartment-grid">
      {apartments.map((apartment) => (
        <ApartmentCard
          key={apartment.id}
          id={apartment.id}
          title={apartment.title}
          cover={apartment.cover}
        />
      ))}
    </div>
  );
}

export default ApartmentGrid;
