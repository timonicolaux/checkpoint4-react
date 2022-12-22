import React, { useEffect, useState } from "react";
import axios from "axios";
import RecetteSummary from "../components/RecetteSummary";
import RecetteDetail from "../components/RecetteDetail";
import "../styles/Recettes.css";

const Recettes = () => {
  const [recettes, setRecettes] = useState([]);
  const [displayDetail, setDisplayDetail] = useState(false);
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState([]);

  const getData = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/recettes`
      );
      if (result) {
        return setRecettes(result.data);
      } else return "no data";
    } catch (error) {
      console.log("get route not working");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="main"
      onClick={() => {
        displayDetail && setDisplayDetail(false);
      }}
    >
      {displayDetail ? (
        <RecetteDetail
          closePopup={() => setDisplayDetail(!displayDetail)}
          details={details}
        />
      ) : (
        ""
      )}
      <div className="selector-div">
        <select
          className="dish-selector"
          name="dish-selector"
          id="dish-selector"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all"></option>
          <option value="entrées">ENTRÉES</option>
          <option value="plats">PLATS</option>
          <option value="desserts">DESSERTS</option>
        </select>
      </div>
      <div>
        <h2 className="description-title">
          Retrouvez ici l'ensemble de nos recettes !
        </h2>
      </div>
      {category === "entrées" || category === "all" || category === "" ? (
        <div>
          <h1 className="category-title">ENTRÉES</h1>
        </div>
      ) : (
        ""
      )}
      <div className="entrees-div">
        {category === "entrées" || category === "all" || category === ""
          ? recettes
              .filter((category) => category.categorie === "Entree")
              .map((data) => (
                <div
                  onClick={() => {
                    setDisplayDetail(!displayDetail);
                    setDetails(data);
                  }}
                  style={{ cursor: "pointer" }}
                  key={data.titre}
                  className="single-recette"
                >
                  <RecetteSummary
                    titre={data.titre}
                    image={data.imagerecette}
                  />
                </div>
              ))
          : ""}
      </div>
      {category === "plats" || category === "all" || category === "" ? (
        <div>
          <h1 className="category-title">PLATS</h1>
        </div>
      ) : (
        ""
      )}
      <div className="plats-div">
        {category === "plats" || category === "all" || category === ""
          ? recettes
              .filter((category) => category.categorie === "Plat")
              .map((data) => (
                <div
                  onClick={() => {
                    setDisplayDetail(!displayDetail);
                    setDetails(data);
                  }}
                  style={{ cursor: "pointer" }}
                  key={data.titre}
                  className="single-recette"
                >
                  <RecetteSummary
                    titre={data.titre}
                    image={data.imagerecette}
                  />
                </div>
              ))
          : ""}
      </div>
      <div>
        {category === "desserts" || category === "all" || category === "" ? (
          <div>
            <h1 className="category-title">DESSERTS</h1>
          </div>
        ) : (
          ""
        )}
        <div className="desserts-div">
          {category === "desserts" || category === "all" || category === ""
            ? recettes
                .filter((category) => category.categorie === "Dessert")
                .map((data) => (
                  <div
                    onClick={() => {
                      setDisplayDetail(!displayDetail);
                      setDetails(data);
                    }}
                    style={{ cursor: "pointer" }}
                    key={data.titre}
                    className="single-recette"
                  >
                    <RecetteSummary
                      titre={data.titre}
                      image={data.imagerecette}
                    />
                  </div>
                ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Recettes;
