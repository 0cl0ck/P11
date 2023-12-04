import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="navbar__logo">
          <img src="logo-kasa.png" alt="Logo" />
        </div>
      </NavLink>

      <NavLink to="/">
        <div className="navbar__link">Accueil</div>
      </NavLink>

      <NavLink to="/about">
        <div className="navbar__link">À propos</div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
