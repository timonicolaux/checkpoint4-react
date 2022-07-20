import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recettes from "./pages/Recettes";
import NewRecette from "./pages/NewRecette";

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recettes/:category" element={<Recettes />} />
        <Route path="/recettes" element={<Recettes />} />
        <Route path="/nouvelle-recette" element={<NewRecette />} />
      </Routes>
    </div>
  );
};

export default Main;
