import axios from "axios";
import React, { useState } from "react";
import "../styles/NewRecette.css";
import { v4 as uuidv4 } from "uuid";

const NouvelleRecette = () => {
  const [ingredientList, setIngredientList] = useState([
    { id: uuidv4(), ingredient: "" },
  ]);
  const [stepList, setStepList] = useState([{ id: uuidv4(), step: "" }]);

  const [titleForm, setTitleForm] = useState("");
  const [categoryForm, setCategoryForm] = useState("");
  // const [ingredientForm, setIngredientForm] = useState([{ ingredient: "" }]);
  // const [etapeForm, setEtapeForm] = useState([]);
  const [imageForm, setImageForm] = useState("");

  const addIngredient = () => {
    setIngredientList([...ingredientList, { id: uuidv4(), ingredient: "" }]);
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

  // const handleChangeIngredient = (index, event) => {
  //   const values = [...ingredientList];
  //   values[index][event.target.name] = event.target.value;
  //   setIngredientList(values);
  // };

  console.log(ingredientList);

  const handleChangeIngredient = (index, event) => {
    const newIngredient = ingredientList.map((i) => {
      if (index === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setIngredientList(newIngredient);
    console.log(ingredientList[0].ingredient);
  };

  const handleChangeStep = (index, event) => {
    const newStep = stepList.map((i) => {
      if (index === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setStepList(newStep);
  };

  const handleSubmit = (e) => {
    e.preventdefault();
    console.log(ingredientList);
  };

  axios
    .post("http://localhost:4000/recettes", {
      titre: titleForm,
      categorie: categoryForm,
      ingredient0: ingredientList[0].ingredient,
      ingredient1: ingredientList[0],
      ingredient2: ingredientList[0],
      ingredient3: ingredientList[0],
      ingredient4: ingredientList[0],
      ingredient5: ingredientList[0],
      ingredient6: ingredientList[0],
      ingredient7: ingredientList[0],
      ingredient8: ingredientList[0],
      ingredient9: ingredientList[0],
      ingredient10: ingredientList[0],
      ingredient11: ingredientList[0],
      ingredient12: ingredientList[0],
      ingredient13: ingredientList[0],
      ingredient14: ingredientList[0],
      etape0: stepList[1],
      etape1: stepList[1],
      etape2: stepList[1],
      etape3: stepList[1],
      etape4: stepList[1],
      etape5: stepList[1],
      etape6: stepList[1],
      etape7: stepList[1],
      etape8: stepList[1],
      etape9: stepList[1],
      etape10: stepList[1],
      etape11: stepList[1],
      etape12: stepList[1],
      etape13: stepList[1],
      etape14: stepList[1],
      imagerecette: imageForm,
    })
    .then(() => console.log("Recette envoyée !"))
    .catch((err) => console.log(err.response.data));

  return (
    <div className="main">
      <div>
        <h2 className="description-title">
          Une idée de recette ? Ajoutez-votre recette en complétant les champs
          ci-dessous
        </h2>
      </div>
      <div className="form-div">
        <form action="post" onSubmit={handleSubmit}>
          <div className="form-elements">
            <div className="title-recette">
              <label className="label">TITRE DE LA RECETTE</label>
              <input
                type="text"
                className="title-input"
                name="titre"
                id="title-recette"
                placeholder="ex: Gâteau au chocolat"
                maxLength="100"
                value={titleForm}
                onChange={(e) => setTitleForm(e.target.value)}
                required
              />
            </div>
            <div className="title-recette">
              <label className="label">CATEGORIE</label>
              <select
                className="category-input"
                name="categorie"
                id="category-recette"
                value={categoryForm}
                onChange={(e) => setCategoryForm(e.target.value)}
                required
              >
                <option value="Entree">Entrée</option>
                <option value="Plat">Plat</option>
                <option value="Dessert">Dessert</option>
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
                        name={`ingredient${index}`}
                        id="ingredient"
                        placeholder="ex: 150g de farine"
                        maxLength="100"
                        value={ingredientList.ingredient}
                        onChange={(event) =>
                          handleChangeIngredient(index, event)
                        }
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
                      <textarea
                        rows="5"
                        className="step-input"
                        name={`etape${index}`}
                        id="step"
                        placeholder="ex: Lavez et épluchez les légumes"
                        maxLength="400"
                        value={stepList.step}
                        onChange={(event) => handleChangeStep(index, event)}
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
                name="imagerecette"
                id="title-recette"
                placeholder="ex: https://super-image.jpg"
                value={imageForm}
                onChange={(e) => setImageForm(e.target.value)}
                maxLength="60"
              />
            </div>
            <button type="submit" className="submitBtn" onClick={handleSubmit}>
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NouvelleRecette;
