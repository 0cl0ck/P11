import React from "react";
import "./ApartmentPage.scss";

function ApartmentPage() {
  return (
    <div className="apartment__page">
      <div>
        <img src="bg-apt-page.webp" alt="" />
      </div>
      <div className="apartment__title">
        <h1>Crazy loft on Canal Saint Martin</h1>
        <h2>Paris, île de France</h2>
        <p>Cozy</p>
        <p>Canal</p>
        <p>Paris 10</p>
      </div>
      <div className="apartment__landlord">
        <h3>Alexandre Dumas</h3>
        <div className="rating">
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </div>
        <div className="apartment__description">
          <p>Description</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            nisi consectetur minima, provident debitis reiciendis eveniet nihil
            saepe totam quibusdam nobis eos vel, iste illo qui hic perferendis
            facere eum eaque porro? Incidunt soluta deleniti molestiae!
            Praesentium tenetur aliquid temporibus possimus asperiores ab iure
            voluptatum veniam, facilis nulla, nobis earum.
          </p>
        </div>
        <div className="apartment__equipment">
          <p>Équipements</p>
          <p>
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
