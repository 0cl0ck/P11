import React from "react";
import "./ApartmentPage.scss";

function ApartmentPage() {
  return (
    <div className="apartment__page">
      <div className="apartment__banner--image">
        <img src="bg-apt-page.webp" alt="" />
      </div>

      <div className="apartment__header">
        <div className="apartment__title">
          <h1>Cozy loft on Canal Saint Martin</h1>
          <h2>Paris, île de France</h2>
          <div className="tags">
            <p>Cozy</p>
            <p>Canal</p>
            <p>Paris 10</p>
          </div>
        </div>
        <div className="apartment__landlord">
          <div className="apartment__landlord--header">
            <div className="apartment__landlord--name">
              <p className="apartment__landlord--firstname">Alexandre </p>
              <p className="apartment__landlord--lastname"> Dumas</p>
            </div>
            <div className="apartment__landlord--avatar">
              <img src="grey.webp" alt="" />
            </div>
          </div>
          <div className="apartment__landlord--rating">
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </div>
        </div>
      </div>

      <div className="apartment__details">
        <div className="apartment__details--description">
          <div className="apartment__details--title">
            <p>Description</p>
            <i class="fa fa-solid fa-chevron-down"></i>
          </div>
          <p className="apartment__details--content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            nisi consectetur minima, provident debitis reiciendis eveniet nihil
            saepe totam quibusdam nobis eos vel, iste illo qui hic perferendis
            facere eum eaque porro? Incidunt soluta deleniti molestiae!
            Praesentium tenetur aliquid temporibus possimus asperiores ab iure
            voluptatum veniam, facilis nulla, nobis earum.
          </p>
        </div>
        <div className="apartment__details--equipment">
          <div className="apartment__details--title">
            <p>Équipements</p>
            <i class="fa fa-solid fa-chevron-down"></i>
          </div>
          <p className="apartment__details--content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            nisi consectetur minima, provident debitis reiciendis eveniet nihil
            saepe totam quibusdam nobis eos vel, iste illo qui hic perferendis
            facere eum eaque porro? Incidunt soluta deleniti molestiae!
            Praesentium tenetur aliquid temporibus possimus asperiores ab iure
            voluptatum veniam, facilis nulla, nobis earum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ApartmentPage;
