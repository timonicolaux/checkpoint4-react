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
          e.target.id === "remove-btn" ||
          e.target.id === "yes-btn" ||
          e.target.id === "no-btn"
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
        <div className="mt-8">
          <h2 className="description-title">
            Retrouvez ici l'ensemble de nos recettes !
          </h2>
        </div>
        <div className="mb-6 mx-auto flex flex-col">
          <label htmlFor="category" />
          <select
            className="mx-auto max-w-[500px] text-center h-8 min-w-[300px] md:min-w-[500px] shadow-xs bg-slate-50 text-black border border-gray-200 rounded  px-4 focus:outline-none"
            id="category"
            type="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">Toutes les catégories</option>
            <option value="entrées">ENTRÉES</option>
            <option value="plats">PLATS</option>
            <option value="desserts">DESSERTS</option>
          </select>
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
