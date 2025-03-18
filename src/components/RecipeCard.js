import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeCard;
