// import React from "react";
// import "./ApartmentPage.scss";
// import ApartmentBanner from "./ApartmentBanner";
// import ApartmentHeader from "./ApartmentHeader";
// import InformationSection from "./InformationSection";
// import { useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";

// function ApartmentPage() {
//   const location = useLocation();
//   const apartmentId = location.state?.id;
//   const [apartment, setApartment] = useState(null);

//   useEffect(() => {
//     fetch("./src/data.json")
//       .then((response) => response.json())
//       .then((data) => {
//         const foundApartment = data.find((apt) => apt.id === apartmentId);
//         setApartment(foundApartment);
//       })
//       .catch((error) => console.error(error));
//   }, [apartmentId]);

//   return (
//     <div className="apartment__page">
//       {apartment && (
//         <>
//           <ApartmentBanner cover={apartment.cover} />
//           <ApartmentHeader
//             title={apartment.title}
//             location={apartment.location}
//             tags={apartment.tags}
//             host={apartment.host}
//             rating={parseInt(apartment.rating)}
//           />

//           <div className="apartment__details">
//             <InformationSection
//               title="Description"
//               content={apartment.description}
//             />
//             <InformationSection
//               title="Equipements"
//               content={apartment.equipments}
//             />
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default ApartmentPage;

import React, { useState, useEffect } from "react";
import "./ApartmentPage.scss";
import "./carousel.scss";
import ApartmentBanner from "./ApartmentBanner";
import ApartmentHeader from "./ApartmentHeader";
import InformationSection from "./InformationSection";
import Carousel from "./Carousel.jsx"; // Assurez-vous d'avoir un Carousel.js correctement configuré
import { useLocation } from "react-router-dom";

function ApartmentPage() {
  const location = useLocation();
  const apartmentId = location.state?.id;
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    fetch("./src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundApartment = data.find((apt) => apt.id === apartmentId);
        setApartment(foundApartment);
      })
      .catch((error) => console.error(error));
  }, [apartmentId]);

  return (
    <div className="apartment__page">
      {apartment ? (
        <>
          {/* Utilisez le composant Carousel pour afficher les images */}
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
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ApartmentPage;
