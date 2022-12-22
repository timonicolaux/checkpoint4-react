import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Home.css";
import Vegetables from "../assets/vegetables.jpg";
import RecetteSummary from "../components/RecetteSummary";
import RecetteDetail from "../components/RecetteDetail";

const Home = () => {
  const [recettes, setRecettes] = useState([]);
  const [displayDetail, setDisplayDetail] = useState(false);
  const [details, setDetails] = useState([]);
  const [randomRecettes, setRandomRecettes] = useState([]);

  const getData = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/recettes`
      );
      if (result) {
        setRecettes(result.data);
        const getTwoRecettes = await getRandomRecettes(result.data);
        setRandomRecettes(getTwoRecettes);
        return;
      } else return "no data";
    } catch (error) {
      console.log("get route not working");
    }
  };

  const getRandomRecettes = async (data) => {
    const randomItem1 = data[Math.floor(Math.random() * data.length)];
    const randomItem2 = data[Math.floor(Math.random() * data.length)];
    const randomItems = [randomItem1, randomItem2];
    if (randomItem1.id !== randomItem2.id) return randomItems;
    else return getRandomRecettes();
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
      <div className="vegetables-img-container" />
      <div className="main-section">
        <div className="home-title-div">
          <h2 className="home-title">
            Envie de cuisiner, mais en manque d’idées ? Trouvez de l’inspiration
            sur notre site
          </h2>
        </div>
        <div className="random-recettes-div">
          <h2 className="random-recettes">RECETTES ALEATOIRES</h2>
        </div>
        <div className="reload-btn-container">
          <button className="reload-btn" onClick={getData}>
            Changer
          </button>
        </div>
        <div className="selection-div">
          {randomRecettes.map((data) => (
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
