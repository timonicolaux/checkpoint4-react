import React from "react";
import "../styles/NouvelleRecette.css";

const NouvelleRecette = () => {
  return (
    <div className="main">
      <div>
        <h2 className="description-title">
          Une idée de recette ? Ajoutez-votre recette en complétant les champs
          ci-dessous
        </h2>
      </div>
      <div className="form-div">
        <form action="post">
          <div className="form-elements">
            <div className="title-recette">
              <label className="label">TITRE DE LA RECETTE</label>
              <input
                type="text"
                name="title-recette"
                id="title-recette"
                placeHolder="ex: Gâteau au chocolat"
                required
              />
            </div>
            <div className="ingredients">
              <label className="label">INGRÉDIENT 1</label>
              <input
                type="text"
                name="ingredient1"
                id="ingredient1"
                placeHolder="ex: 150g de farine"
                required
              />
              <button type="button" className="add-btn">
                <span>+</span>
              </button>
            </div>
            <div className="ingredients">
              <label className="label">INGRÉDIENT 2</label>
              <input
                type="text"
                name="ingredient2"
                id="ingredient2"
                placeHolder="ex: 2 oeufs"
              />
              <button type="button" className="remove-btn">
                <span>x</span>
              </button>
            </div>
            <button>ENVOYER</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NouvelleRecette;
