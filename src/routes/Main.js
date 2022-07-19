import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Recettes } from "../pages/Recettes";
import { NouvelleRecette } from "../pages/NouvelleRecette";
// import "../styles/home.css";
// import "../styles/App.css";

export const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recettes/:category" element={<Recettes />} />
        <Route path="/recettes" element={<Recettes />} />
        <Route path="/nouvelle-recette" element={<NouvelleRecette />} />
      </Routes>
    </div>
  );
};
