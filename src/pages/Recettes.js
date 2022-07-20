import React, { useEffect, useState } from "react";
import axios from "axios";
import RecetteSummary from "../components/RecetteSummary";
import "../styles/Recettes.css";

const Recettes = () => {
  const [recettes, getRecettes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/recettes")
      .then((result) => result.data)
      .then((data) => {
        getRecettes(data);
      })
      .catch(() => console.log("get route not working"));
  }, [recettes]);

  console.log(recettes);
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
        <div>
          {recettes.map((data) => (
            <RecetteSummary titre={data.titre} />
          ))}
          map here
        </div>
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
