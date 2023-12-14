import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/Home" className="home-link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
