import React from "react";
import "./LocationGrid.scss";
import Card from "./Card.jsx";
import { useState, useEffect } from "react";

function LocationGrid() {
  const [apartments, setApartments] = useState([]);
  useEffect(fetchApartments, []);

  function fetchApartments() {
    fetch("./src/data.json")
      .then((response) => response.json())
      .then((data) => setApartments(data))
      .catch((error) => console.error(error));
  }

  return (
    <div className="location-grid">
      {apartments.map((apartment) => (
        <Card
          key={apartment.id}
          title={apartment.title}
          cover={apartment.cover}
        />
      ))}
    </div>
  );
}

export default LocationGrid;
