import React, { useState } from "react";
import "../styles/NewRecette.css";

const NouvelleRecette = () => {
  const [ingredientList, setIngredientList] = useState([{ ingredient: "" }]);
  const [stepList, setStepList] = useState([{ step: "" }]);

  const addIngredient = () => {
    setIngredientList([...ingredientList, { ingredient: "" }]);
  };

  const deleteIngredient = (index) => {
    const list = [...ingredientList];
    list.splice(index, 1);
    setIngredientList(list);
  };

  const addStep = () => {
    setStepList([...stepList, { step: "" }]);
  };

  const deleteStep = (index) => {
    const list = [...stepList];
    list.splice(index, 1);
    setStepList(list);
  };

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
                className="title-input"
                name="title-recette"
                id="title-recette"
                placeholder="ex: Gâteau au chocolat"
                maxlength="100"
                required
              />
            </div>
            <div className="title-recette">
              <label className="label">CATEGORIE</label>
              <select
                className="category-input"
                name="category-recette"
                id="category-recette"
                required
              >
                <option value="starter">Entrée</option>
                <option value="main-course">Plat</option>
                <option value="dessert">Dessert</option>
              </select>
            </div>
            {ingredientList.map((ingredients, index) => (
              <div key={index} className="all-ingredients">
                <div className="ingredients">
                  <div className="ingredient">
                    <label htmlFor="ingredient" className="label">
                      INGRÉDIENT
                    </label>
                    <div className="input-div">
                      <input
                        type="text"
                        className="ingredient-input"
                        name="ingredient"
                        id="ingredient"
                        placeholder="ex: 150g de farine"
                        maxlength="100"
                        required
                      />
                    </div>
                    {ingredientList.length > 1 && (
                      <button
                        onClick={deleteIngredient}
                        type="button"
                        className="remove-btn"
                      >
                        <span>x</span>
                      </button>
                    )}

                    {ingredientList.length - 1 === index &&
                      ingredientList.length < 15 && (
                        <button
                          onClick={addIngredient}
                          type="button"
                          className="add-btn"
                        >
                          <span>+</span>
                        </button>
                      )}
                  </div>
                </div>
              </div>
            ))}
            {stepList.map((steps, index) => (
              <div key={index} className="all-ingredients">
                <div className="ingredients">
                  <div className="ingredient">
                    <label htmlFor="step" className="label">
                      ÉTAPE
                    </label>
                    <div className="input-div">
                      <textArea
                        rows="5"
                        className="step-input"
                        name="step"
                        id="step"
                        placeholder="ex: Lavez et épluchez les légumes"
                        maxlength="400"
                        required
                      />
                    </div>
                    {stepList.length > 1 && (
                      <button
                        onClick={deleteStep}
                        type="button"
                        className="remove-btn"
                      >
                        <span>x</span>
                      </button>
                    )}

                    {stepList.length - 1 === index && stepList.length < 15 && (
                      <button
                        onClick={addStep}
                        type="button"
                        className="add-btn"
                      >
                        <span>+</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="title-recette">
              <label className="label">IMAGE</label>
              <input
                type="text"
                className="title-input"
                name="title-recette"
                id="title-recette"
                placeholder="ex: https://super-image.jpg"
                maxlength="60"
              />
            </div>
            <button className="submitBtn">ENVOYER</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NouvelleRecette;
