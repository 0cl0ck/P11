import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Nettoyage de l'écouteur d'événements
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToNext, goToPrevious]);

  return (
    <div className="carousel">
      <FontAwesomeIcon
        className="carousel__chevrons"
        onClick={goToPrevious}
        icon="chevron-left"
      />
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <FontAwesomeIcon
        className="carousel__chevrons"
        onClick={goToNext}
        icon="chevron-right"
      />
    </div>
  );
}
export default Carousel;
