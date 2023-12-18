import React from "react";

function ApartmentDetails({ title, content }) {
  return (
    <div className="apartment__details--description">
      <div className="apartment__details--title">
        <p>{title}</p>
        <i className="fa fa-solid fa-chevron-down"></i>
      </div>
      <p className="apartment__details--content">
        {Array.isArray(content) ? content.join(", ") : content}
      </p>
    </div>
  );
}

export default ApartmentDetails;
