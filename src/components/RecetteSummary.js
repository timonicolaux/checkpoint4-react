import React from "react";
import "../styles/RecetteSummary.css";

const RecetteSummary = ({ titre, image }) => {
  return (
    <div className="recette-summary">
      <img
        src={
          image === ""
            ? "https://thumbs.dreamstime.com/b/no-image-vector-isolated-white-background-no-image-vector-illustration-isolated-156298619.jpg"
            : image
        }
        alt={titre}
        className="recette-img"
      />
      <h1 className="recette-title">{titre}</h1>
    </div>
  );
};

export default RecetteSummary;
