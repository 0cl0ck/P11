import React, { useState } from "react";
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
