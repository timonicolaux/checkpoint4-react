import React from "react";
import "../styles/RecetteSummary.css";
import ContentLoader from "react-content-loader";
import noImage from "../assets/no-image.jpeg";

const RecetteSummary = ({ titre, image, isLoading }) => {
  return (
    <>
      {!isLoading && (
        <div className="recette-summary">
          {image === "" ? (
            <div
              style={{
                backgroundImage: `url(${noImage})`,
              }}
              className="recette-img"
            />
          ) : (
            <div
              style={{
                backgroundImage: `url(${image})`,
              }}
              className="recette-img"
            />
          )}
          <h1 className="recette-title">{titre}</h1>
        </div>
      )}
      {window.innerWidth > 500 && isLoading && (
        <div className="mt-12">
          <ContentLoader
            height="400px"
            width="350px"
            backgroundColor="#d9d9d9"
            animate={true}
          >
            <rect x="25" width="300px" height="300px" rx="10" ry="10" />
            <rect x="25" y="320" width="300px" height="40px" rx="10" ry="10" />
          </ContentLoader>
        </div>
      )}
      {window.innerWidth <= 500 && isLoading && (
        <div className="mt-2">
          <ContentLoader
            height="200px"
            width="150px"
            backgroundColor="#d9d9d9"
            animate={true}
          >
            <rect x="0" width="150px" height="150px" rx="10" ry="10" />
            <rect x="0" y="160" width="150px" height="25px" rx="10" ry="10" />
          </ContentLoader>
        </div>
      )}
    </>
  );
};

export default RecetteSummary;
