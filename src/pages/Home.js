import React from "react";
import "../styles/Home.css";
import Vegetables from "../assets/vegetables.jpg";

const Home = () => {
  return (
    <div className="main">
      <div>
        <img src={Vegetables} alt="vegetables-img" className="vegetables-img" />
      </div>
      <div className="main-section">
        <div className="home-title-div">
          <h2 className="home-title">
            Envie de cuisiner, mais en manque d’idées ? Trouvez de l’inspiration
            sur notre site
          </h2>
        </div>
        <div className="top-recettes-div">
          <h2 className="top-recettes">NOTRE TOP RECETTES</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
