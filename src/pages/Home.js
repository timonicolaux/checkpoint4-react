import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Home.css";
import Vegetables from "../assets/vegetables.jpg";
import RecetteSummary from "../components/RecetteSummary";
import RecetteDetail from "../components/RecetteDetail";

const Home = () => {
  const [recettes, getRecettes] = useState([]);
  const [displayDetail, setDisplayDetail] = useState(false);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/recettes`)
      .then((result) => result.data)
      .then((data) => {
        getRecettes(data);
      })
      .catch(() => console.log("get route not working"));
  }, [recettes]);

  return (
    <div className="main">
      {displayDetail ? (
        <RecetteDetail
          closePopup={() => setDisplayDetail(!displayDetail)}
          details={details}
        />
      ) : (
        ""
      )}
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
          <h2 className="top-recettes">NOTRE SELECTION</h2>
        </div>
        <div className="selection-div">
          {recettes.slice(0, 2).map((data) => (
            <div
              onClick={() => {
                setDisplayDetail(!displayDetail);
                setDetails(data);
              }}
              style={{ cursor: "pointer" }}
              key={data.titre}
              className="single-recette"
            >
              <RecetteSummary titre={data.titre} image={data.imagerecette} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
