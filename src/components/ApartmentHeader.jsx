import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ApartmentHeader({ title, location, tags, host, rating }) {
  function generateRatingStars(rating) {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon="star"
          className={i < rating ? "full-star" : "empty-star"}
        />
      );
    }
    return stars;
  }

  return (
    <div className="apartment__header">
      <div className="apartment__title">
        <h1>{title}</h1>
        <h2>{location}</h2>
        <div className="tags">
          {tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
      </div>
      <div className="apartment__landlord">
        <div className="apartment__landlord--name">
          <p>{host.name}</p>
        </div>
        <div className="apartment__landlord--avatar">
          <img src={host.picture} alt={host.name} />
        </div>
        <div className="apartment__landlord--rating">
          {generateRatingStars(rating)}
        </div>
      </div>
    </div>
  );
}

export default ApartmentHeader;
