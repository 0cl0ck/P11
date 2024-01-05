import React from "react";
import "./About.scss";
import Banner from "../components/Banner.Jsx";
import InformationSection from "../components/InformationSection";
import { useEffect } from "react";

const infoSections = [
  {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

function About() {
  useEffect(() => {
    const root = document.getElementById("root");
    root.classList.add("about-page");

    return () => {
      root.classList.remove("about-page");
    };
  }, []); // Le tableau vide signifie que cet effet ne s'exécutera que lorsque le composant est monté ou démonté

  return (
    <>
      <Banner
        backgroundImage="/illustration-banner-about.webp"
        title=""
        additionalStyle={{ backgroundSize: "cover" }}
      />

      <div className="about__infoSection">
        {infoSections.map((section, index) => (
          <InformationSection
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </>
  );
}

export default About;
