import React from "react";
import "../styles/RecetteSummary.css";
import ContentLoader from "react-content-loader";

const RecetteSummary = ({ titre, image, isLoading }) => {
  return (
    <>
      {!isLoading && (
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
      )}
      {window.innerWidth > 500 && isLoading && (
        <ContentLoader
          height="400px"
          width="350px"
          backgroundColor="#d9d9d9"
          animate={true}
        >
          <rect x="25" width="300px" height="300px" rx="10" ry="10" />
          <rect x="25" y="320" width="300px" height="40px" rx="10" ry="10" />
        </ContentLoader>
      )}
      {window.innerWidth <= 500 && isLoading && (
        <ContentLoader
          height="200px"
          width="150px"
          backgroundColor="#d9d9d9"
          animate={true}
        >
          <rect x="0" width="150px" height="150px" rx="10" ry="10" />
          <rect x="0" y="160" width="150px" height="25px" rx="10" ry="10" />
        </ContentLoader>
      )}
    </>
  );
};

export default RecetteSummary;
