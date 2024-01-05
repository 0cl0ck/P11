import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <NavLink to="/">
          <div className="navbar__logo">
            <img src="/logo-kasa.png" alt="Logo" />
          </div>
        </NavLink>

        <div className="navbar__links">
          <NavLink to="/">
            <div className="navbar__link">Accueil</div>
          </NavLink>

          <NavLink to="/about">
            <div className="navbar__link">A propos</div>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
