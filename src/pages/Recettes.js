import React, { useEffect, useState } from "react";
import axios from "axios";
import RecetteSummary from "../components/RecetteSummary";
import RecetteDetail from "../components/RecetteDetail";
import "../styles/Recettes.css";

const Recettes = () => {
  const [recettes, setRecettes] = useState([]);
  const [displayDetail, setDisplayDetail] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/recettes`
      );
      if (result) {
        setRecettes(result.data);
        setIsLoading(false);
      } else return "no data";
    } catch (error) {
      console.log("get route not working");
    }
  };

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      getData();
    }, 1000);
    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div
      className="main"
      onClick={(e) => {
        if (
          e.target.classList.value === "remove-btn" ||
          e.target.classList.value === "remove-btn-container" ||
          e.target.classList.value === "confirmation-container" ||
          e.target.classList.value === "confirmation-btn-container" ||
          e.target.classList.value === "yes-btn" ||
          e.target.classList.value === "no-btn"
        )
          return;
        displayDetail && setDisplayDetail(false);
      }}
    >
      {displayDetail && (
        <RecetteDetail
          closePopup={() => setDisplayDetail(!displayDetail)}
          details={details}
          setDisplayDetail={setDisplayDetail}
          getData={getData}
        />
      )}
      <div>
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
          {isLoading && (
            <>
              <RecetteSummary titre="" image="" isLoading={isLoading} />
              <RecetteSummary titre="" image="" isLoading={isLoading} />
              <RecetteSummary titre="" image="" isLoading={isLoading} />
              <RecetteSummary titre="" image="" isLoading={isLoading} />
            </>
          )}
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
                      isLoading={false}
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
          {isLoading && (
            <>
              <RecetteSummary titre="" image="" isLoading={isLoading} />
              <RecetteSummary titre="" image="" isLoading={isLoading} />
              <RecetteSummary titre="" image="" isLoading={isLoading} />
              <RecetteSummary titre="" image="" isLoading={isLoading} />
            </>
          )}
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
                      isLoading={false}
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
            {isLoading && (
              <>
                <RecetteSummary titre="" image="" isLoading={isLoading} />
                <RecetteSummary titre="" image="" isLoading={isLoading} />
                <RecetteSummary titre="" image="" isLoading={isLoading} />
                <RecetteSummary titre="" image="" isLoading={isLoading} />
              </>
            )}
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
                        isLoading={false}
                      />
                    </div>
                  ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recettes;
