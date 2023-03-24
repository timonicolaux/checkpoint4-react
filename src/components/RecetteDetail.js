import React, { useState } from "react";
import "../styles/RecetteDetail.css";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import noImage from "../assets/no-image.jpeg";

const RecetteDetail = ({ closePopup, details, setDisplayDetail, getData }) => {
  const [confirm, setConfirm] = useState(false);

  const deleteRecette = async (id) => {
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_API_URL}/recettes/${id}`
      );
      if (result) {
        toast.success("Recette supprimée");
        setTimeout(() => {
          setDisplayDetail(false);
          getData();
        }, 2000);
      }
    } catch (error) {
      toast.error("Une erreur est survenue");
      console.log(error);
    }
  };

  return (
    <div className="popup">
      <Toaster position="bottom-center" />
      <div className="popup-container">
        <IoMdClose size={50} className="close-popup" />
        <div className="recette-detail">
          <h1 className="recette-detail-titre">{details.titre}</h1>
          {details.imagerecette === "" ? (
            <div
              style={{
                backgroundImage: `url(${noImage})`,
              }}
              className="recette-detail-img"
            ></div>
          ) : (
            <div
              style={{
                backgroundImage: `url(${details.imagerecette})`,
              }}
              className="recette-detail-img"
            ></div>
          )}
          <div className="ingredient-detail-div">
            <h2 className="ingredient-title">INGRÉDIENTS</h2>
            <h3
              className={details.ingredient0 != null ? "ingredient-detail" : ""}
            >
              {details.ingredient0}
            </h3>
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
            <h3 className={details.etape0 != null ? "etape-detail" : ""}>
              {details.etape0 != null ? `■ ` + details.etape0 : ""}
            </h3>
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
        {details.id > 10 && !confirm && (
          <div className="remove-btn-container">
            <button
              className="bg-red-600 hover:bg-red-500 text-white mx-auto font-bold m-2 py-2 px-4 rounded mt-4 w-fit"
              onClick={() => setConfirm(true)}
              id="remove-btn"
            >
              Supprimer
            </button>
          </div>
        )}
        {confirm && (
          <div className="confirmation-container">
            <p className="text-center">Confirmez-vous cette action ?</p>
            <div className="confirmation-btn-container">
              <button
                className="bg-green-600 hover:bg-green-500 text-white font-bold m-2 py-2 px-4 mx-2 rounded mt-4 w-fit"
                onClick={() => deleteRecette(details.id)}
                id="yes-btn"
              >
                Oui
              </button>
              <button
                className="bg-red-600 hover:bg-red-500 text-white mx-2 font-bold m-2 py-2 px-4 rounded mt-4 w-fit"
                onClick={() => setConfirm(false)}
                id="no-btn"
              >
                Non
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecetteDetail;
