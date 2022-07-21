import axios from "axios";
import React, { useState } from "react";
import "../styles/NewRecette.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const NouvelleRecette = () => {
  const [ingredientList, setIngredientList] = useState([{}]);
  const [stepList, setStepList] = useState([{}]);
  const navigate = useNavigate();
  const [titleForm, setTitleForm] = useState("");
  const [categoryForm, setCategoryForm] = useState("Entree");
  const [imageForm, setImageForm] = useState("");

  const addIngredient = () => {
    setIngredientList([...ingredientList, { ingredient: "" }]);
  };

  const deleteIngredient = (index) => {
    const list = [...ingredientList];
    list.splice(index, 1);
    setIngredientList(list);
  };

  console.log(stepList);
  const addStep = () => {
    setStepList([...stepList, { step: "" }]);
  };

  const deleteStep = (index) => {
    const list = [...stepList];
    list.splice(index, 1);
    setStepList(list);
  };

  const handleChangeIngredient = (index, event) => {
    const newIngredient = ingredientList.map((i) => {
      i[event.target.name] = event.target.value;
      return i;
    });
    setIngredientList(newIngredient);
  };

  const handleChangeStep = (index, event) => {
    const newStep = stepList.map((i) => {
      i[event.target.name] = event.target.value;
      return i;
    });
    setStepList(newStep);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/recettes", {
        titre: titleForm,
        categorie: categoryForm,
        ingredient0: ingredientList[0]["ingredient0"] || null,
        ingredient1: ingredientList[0]["ingredient1"] || null,
        ingredient2: ingredientList[0]["ingredient2"] || null,
        ingredient3: ingredientList[0]["ingredient3"] || null,
        ingredient4: ingredientList[0]["ingredient4"] || null,
        ingredient5: ingredientList[0]["ingredient5"] || null,
        ingredient6: ingredientList[0]["ingredient6"] || null,
        ingredient7: ingredientList[0]["ingredient7"] || null,
        ingredient8: ingredientList[0]["ingredient8"] || null,
        ingredient9: ingredientList[0]["ingredient9"] || null,
        ingredient10: ingredientList[0]["ingredient10"] || null,
        ingredient11: ingredientList[0]["ingredient11"] || null,
        ingredient12: ingredientList[0]["ingredient12"] || null,
        ingredient13: ingredientList[0]["ingredient13"] || null,
        ingredient14: ingredientList[0]["ingredient14"] || null,
        etape0: stepList[0]["etape0"] || null,
        etape1: stepList[0]["etape1"] || null,
        etape2: stepList[0]["etape2"] || null,
        etape3: stepList[0]["etape3"] || null,
        etape4: stepList[0]["etape4"] || null,
        etape5: stepList[0]["etape5"] || null,
        etape6: stepList[0]["etape6"] || null,
        etape7: stepList[0]["etape7"] || null,
        etape8: stepList[0]["etape8"] || null,
        etape9: stepList[0]["etape9"] || null,
        etape10: stepList[0]["etape10"] || null,
        etape11: stepList[0]["etape11"] || null,
        etape12: stepList[0]["etape12"] || null,
        etape13: stepList[0]["etape13"] || null,
        etape14: stepList[0]["etape14"] || null,
        imagerecette: imageForm,
      })
      .then(() => {
        toast.success("Recette envoyée !");
        setTimeout(() => {
          navigate("/recettes");
        }, 2000);
      })
      .catch(() => toast.error("Une erreur est survenue"))
      .finally(
        setTitleForm(""),
        setCategoryForm("Entree"),
        setIngredientList([{}]),
        setStepList([{}]),
        setImageForm("")
      );
  };

  return (
    <div className="main">
      <Toaster position="bottom-center" />
      <div>
        <h2 className="description-title">
          Une idée de recette ? Ajoutez-votre recette en complétant les champs
          ci-dessous
        </h2>
      </div>
      <div className="form-div">
        <form onSubmit={handleSubmit}>
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
                        Supprimer
                      </button>
                    )}

                    {ingredientList.length - 1 === index &&
                      ingredientList.length < 15 && (
                        <button
                          onClick={addIngredient}
                          type="button"
                          className="add-btn"
                        >
                          Ajouter
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
                        <span>Supprimer</span>
                      </button>
                    )}

                    {stepList.length - 1 === index && stepList.length < 15 && (
                      <button
                        onClick={addStep}
                        type="button"
                        className="add-btn"
                      >
                        <span>Ajouter</span>
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
                maxLength="300"
                required
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
