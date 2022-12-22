import React from "react";
import "../styles/RecetteDetail.css";
import ClosePopup from "../assets/closepopup.png";

const RecetteDetail = ({ closePopup, details }) => {
  return (
    <div className="popup">
      <div className="popup-container">
        <img
          src={ClosePopup}
          alt="close-popup"
          className="close-popup"
          onClick={closePopup}
        />
        <div className="recette-detail">
          <h1 className="recette-detail-titre">{details.titre}</h1>
          <img
            src={details.imagerecette}
            alt={details.titre}
            className="recette-detail-img"
          />
          <div className="ingredient-detail-div">
            <h2 className="ingredient-title">INGRÉDIENTS</h2>
            <h3
              className={details.ingredient1 != null ? "ingredient-detail" : ""}
            >
              {details.ingredient1}
            </h3>
            <h3
              className={details.ingredient2 != null ? "ingredient-detail" : ""}
            >
              {details.ingredient2}
            </h3>
            <h3
              className={details.ingredient3 != null ? "ingredient-detail" : ""}
            >
              {details.ingredient3}
            </h3>
            <h3
              className={details.ingredient4 != null ? "ingredient-detail" : ""}
            >
              {details.ingredient4}
            </h3>
            <h3
              className={details.ingredient5 != null ? "ingredient-detail" : ""}
            >
              {details.ingredient5}
            </h3>
            <h3
              className={details.ingredient6 != null ? "ingredient-detail" : ""}
            >
              {details.ingredient6}
            </h3>
            <h3
              className={details.ingredient7 != null ? "ingredient-detail" : ""}
            >
              {details.ingredient7}
            </h3>
            <h3
              className={details.ingredient8 != null ? "ingredient-detail" : ""}
            >
              {details.ingredient8}
            </h3>
            <h3
              className={details.ingredient9 != null ? "ingredient-detail" : ""}
            >
              {details.ingredient9}
            </h3>
            <h3
              className={
                details.ingredient10 != null ? "ingredient-detail" : ""
              }
            >
              {details.ingredient10}
            </h3>
            <h3
              className={
                details.ingredient11 != null ? "ingredient-detail" : ""
              }
            >
              {details.ingredient11}
            </h3>
            <h3
              className={
                details.ingredient12 != null ? "ingredient-detail" : ""
              }
            >
              {details.ingredient12}
            </h3>
            <h3
              className={
                details.ingredient13 != null ? "ingredient-detail" : ""
              }
            >
              {details.ingredient13}
            </h3>
            <h3
              className={
                details.ingredient14 != null ? "ingredient-detail" : ""
              }
            >
              {details.ingredient14}
            </h3>
            <h3
              className={
                details.ingredient15 != null ? "ingredient-detail" : ""
              }
            >
              {details.ingredient15}
            </h3>
          </div>
          <div className="etape-detail-div">
            <h2 className="etape-title">ÉTAPES</h2>
            <h3 className={details.etape1 != null ? "etape-detail" : ""}>
              {details.etape1 != null ? `■ ` + details.etape1 : ""}
            </h3>
            <h3 className={details.etape2 != null ? "etape-detail" : ""}>
              {details.etape2 != null ? `■ ` + details.etape2 : ""}
            </h3>
            <h3 className={details.etape3 != null ? "etape-detail" : ""}>
              {details.etape3 != null ? `■ ` + details.etape3 : ""}
            </h3>
            <h3 className={details.etape4 != null ? "etape-detail" : ""}>
              {details.etape4 != null ? `■ ` + details.etape4 : ""}
            </h3>
            <h3 className={details.etape5 != null ? "etape-detail" : ""}>
              {details.etape5 != null ? `■ ` + details.etape5 : ""}
            </h3>
            <h3 className={details.etape6 != null ? "etape-detail" : ""}>
              {details.etape6 != null ? `■ ` + details.etape6 : ""}
            </h3>
            <h3 className={details.etape7 != null ? "etape-detail" : ""}>
              {details.etape7 != null ? `■ ` + details.etape7 : ""}
            </h3>
            <h3 className={details.etape8 != null ? "etape-detail" : ""}>
              {details.etape8 != null ? `■ ` + details.etape8 : ""}
            </h3>
            <h3 className={details.etape9 != null ? "etape-detail" : ""}>
              {details.etape9 != null ? `■ ` + details.etape9 : ""}
            </h3>
            <h3 className={details.etape10 != null ? "etape-detail" : ""}>
              {details.etape10 != null ? `■ ` + details.etape10 : ""}
            </h3>
            <h3 className={details.etape11 != null ? "etape-detail" : ""}>
              {details.etape11 != null ? `■ ` + details.etape11 : ""}
            </h3>
            <h3 className={details.etape12 != null ? "etape-detail" : ""}>
              {details.etape12 != null ? `■ ` + details.etape12 : ""}
            </h3>
            <h3 className={details.etape13 != null ? "etape-detail" : ""}>
              {details.etape13 != null ? `■ ` + details.etape13 : ""}
            </h3>
            <h3 className={details.etape14 != null ? "etape-detail" : ""}>
              {details.etape14 != null ? `■ ` + details.etape14 : ""}
            </h3>
            <h3 className={details.etape15 != null ? "etape-detail" : ""}>
              {details.etape15 != null ? `■ ` + details.etape15 : ""}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecetteDetail;
