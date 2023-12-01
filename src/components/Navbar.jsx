import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="logo-kasa.png" alt="Logo" />
      </div>

      <NavLink to="/">
        <div>Accueil</div>
      </NavLink>

      <NavLink to="/about">
        <div>À propos</div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
