import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="logo-kasa.png" alt="Logo" />
      </div>
      <div>Accueil</div>
      <div>À propos</div>
    </nav>
  );
}

export default Navbar;
