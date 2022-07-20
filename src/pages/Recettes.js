import React from "react";
import "../styles/Recettes.css";

const Recettes = () => {
  return (
    <div className="main">
      <div className="selector-div">
        <select
          className="dish-selector"
          name="dish-selector"
          id="dish-selector"
        >
          <option value="starter">ENTRÉES</option>
          <option value="main-course">PLATS</option>
          <option value="dessert">DESSERTS</option>
        </select>
      </div>
      <div>
        <h2 className="description-title">
          Retrouvez ici l'ensemble de nos recettes
        </h2>
      </div>
      <div>
        <div>
          <h1 className="category-title">ENTRÉES</h1>
        </div>
        <div>map here</div>
      </div>
      <div>
        <div>
          <h1 className="category-title">PLATS</h1>
        </div>
        <div>map here</div>
      </div>
      <div>
        <div>
          <h1 className="category-title">DESSERTS</h1>
        </div>
        <div>map here</div>
      </div>
    </div>
  );
};

export default Recettes;
