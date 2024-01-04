import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const showControls = images.length > 1; // Show controls only if there are more than 1 image

  const goToPrevious = () => {
    if (showControls) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (showControls) {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (showControls) {
        if (event.key === "ArrowLeft") {
          goToPrevious();
        } else if (event.key === "ArrowRight") {
          goToNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToNext, goToPrevious, showControls]);

  return (
    <div className="carousel">
      {showControls && (
        <FontAwesomeIcon
          className="carousel__chevrons"
          onClick={goToPrevious}
          icon="chevron-left"
        />
      )}
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      {showControls && (
        <div className="carousel__pagination">{`${currentIndex + 1} / ${
          images.length
        }`}</div>
      )}
      {showControls && (
        <FontAwesomeIcon
          className="carousel__chevrons"
          onClick={goToNext}
          icon="chevron-right"
        />
      )}
    </div>
  );
}
Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Carousel;
