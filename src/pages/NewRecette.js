import axios from "axios";
import React, { useState } from "react";
import "../styles/NewRecette.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const NouvelleRecette = () => {
  const navigate = useNavigate();
  const [ingredientList, setIngredientList] = useState([{}]);
  const [stepList, setStepList] = useState([{}]);
  const [titleForm, setTitleForm] = useState("");
  const [categoryForm, setCategoryForm] = useState("");
  const [imageForm, setImageForm] = useState("");

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
    if (!titleForm.length || categoryForm === "") {
      return toast.error(
        "Veuillez saisir au moins un titre, une catégorie, un ingrédient et une étape"
      );
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/recettes`, {
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
      <div className="description-container">
        <h2 className="description-title">
          Une idée de recette ? Ajoutez-votre recette en complétant les champs
          ci-dessous
        </h2>
        <p className="description-info">
          (Vous aurez ensuite la possibilité de supprimer votre recette)
        </p>
      </div>
      <div className="bg-zinc-200 w-[90%] flex flex-col justify-center items-center  overflow-x-hidden rounded-md shadow-md mb-[20%]">
        <div className="mb-6 mx-auto my-4 flex flex-col">
          <form onSubmit={handleSubmit}>
            <div className="mb-6 mx-auto my-4 flex flex-col">
              <label
                className="block tracking-wide text-gray-900 text-md font-medium mb-2"
                htmlFor="recette-title"
              >
                TITRE DE LA RECETTE
              </label>
              <input
                className="mx-auto max-w-[650px] h-8 min-w-[300px] md:min-w-[650px] shadow-xs bg-slate-50 text-black border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white"
                id="recette-title"
                type="text"
                maxLength={100}
                value={titleForm}
                onChange={(e) => setTitleForm(e.target.value)}
                required
              />
            </div>
            <div className="mb-6 mx-auto my-4 flex flex-col">
              <label
                className="block tracking-wide text-gray-900 text-md font-medium mb-2"
                htmlFor="category"
              >
                CATEGORIE
              </label>
              <select
                className="mx-auto max-w-[650px] h-8 min-w-[300px] md:min-w-[650px] shadow-xs bg-slate-50 text-black border border-gray-200 rounded  px-4 focus:outline-none focus:bg-white"
                id="category"
                type="select"
                value={categoryForm}
                onChange={(e) => setCategoryForm(e.target.value)}
                required
              >
                <option value=""></option>
                <option value="Entree">Entrée</option>
                <option value="Plat">Plat</option>
                <option value="Dessert">Dessert</option>
              </select>
            </div>

            {ingredientList.map((ingredients, index) => (
              <div key={index}>
                <div className="ingredients">
                  <div className="mb-6 mx-auto my-4 flex flex-col">
                    <label
                      className="block tracking-wide text-gray-900 text-md font-medium mb-2"
                      htmlFor="ingredient"
                    >
                      INGRÉDIENT
                    </label>
                    <input
                      className="mx-auto max-w-[650px] h-8 min-w-[300px] md:min-w-[650px] shadow-xs bg-slate-50 text-black border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white"
                      name={`ingredient${index}`}
                      id="ingredient"
                      type="text"
                      placeholder="ex: 150g de farine"
                      maxLength={300}
                      value={ingredientList.ingredient}
                      onChange={(event) => handleChangeIngredient(index, event)}
                      required
                    />
                  </div>

                  {ingredientList.length > 1 && (
                    <button
                      className="bg-red-600 hover:bg-red-500 text-white mx-auto font-bold m-2 py-2 px-4 rounded mt-4 w-fit"
                      onClick={deleteIngredient}
                      id="remove-btn"
                    >
                      Supprimer la ligne
                    </button>
                  )}

                  {ingredientList.length - 1 === index &&
                    ingredientList.length < 15 && (
                      <button
                        className="bg-green-600 hover:bg-green-500 text-white mx-auto font-bold m-2 py-2 px-4 rounded mt-4 w-fit"
                        onClick={addIngredient}
                        id="add-btn"
                      >
                        Ajouter une ligne
                      </button>
                    )}
                </div>
              </div>
            ))}
            {stepList.map((steps, index) => (
              <div key={index}>
                <div className="ingredients">
                  <div className="ingredient">
                    <div className="mb-6 mx-auto my-4 flex flex-col">
                      <label
                        className="block tracking-wide text-gray-900 text-md font-medium mb-2"
                        htmlFor="step"
                      >
                        ETAPE
                      </label>
                      <textarea
                        className="mx-auto max-w-[650px] h-[150px] min-w-[300px] md:min-w-[650px] shadow-xs bg-slate-50 text-black border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white"
                        name={`etape${index}`}
                        id="step"
                        placeholder="ex: Lavez et épluchez les légumes"
                        maxLength={400}
                        value={stepList.step}
                        onChange={(event) => handleChangeStep(index, event)}
                        required
                      />
                    </div>
                    {stepList.length > 1 && (
                      <button
                        className="bg-red-600 hover:bg-red-500 text-white mx-auto font-bold m-2 py-2 px-4 rounded mt-4 w-fit"
                        onClick={deleteStep}
                        id="remove-btn"
                      >
                        <span>Supprimer la ligne</span>
                      </button>
                    )}

                    {stepList.length - 1 === index && stepList.length < 15 && (
                      <button
                        className="bg-green-600 hover:bg-green-500 text-white mx-auto font-bold m-2 py-2 px-4 rounded mt-4 w-fit"
                        onClick={addStep}
                        id="add-btn"
                      >
                        <span>Ajouter une ligne</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="mb-6 mx-auto my-4 flex flex-col">
              <label
                className="block tracking-wide text-gray-900 text-md font-medium mb-2"
                htmlFor="image"
              >
                IMAGE
              </label>
              <input
                className="mx-auto max-w-[650px] h-8 min-w-[300px] md:min-w-[650px] shadow-xs bg-slate-50 text-black border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white"
                type="text"
                id="image"
                placeholder="ex: https://super-image.jpg"
                value={imageForm}
                onChange={(e) => setImageForm(e.target.value)}
                maxLength={300}
                required
              />
            </div>
            <div className="submitBtnContainer">
              <button
                className="bg-green-600 hover:bg-green-500 text-white mx-auto font-bold m-2 py-2 px-4 rounded mt-4 w-40"
                onClick={handleSubmit}
              >
                Valider
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NouvelleRecette;
