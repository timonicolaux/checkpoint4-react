import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 className="main-title">
        <b>JE</b>CUISINE
      </h1>
      <nav className="nav">
        <ul className="ul-nav">
          <Link className="link-style" to="/">
            <li className="li-nav">Accueil</li>
          </Link>
          <Link className="link-style" to="/recettes">
            <li className="li-nav">Recettes</li>
          </Link>
          <Link className="link-style" to="/nouvelle-recette">
            <li className="li-nav">Ajouter</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
