import React from "react";

function RecipeCard({ name, description }) {
  return (
    <div className="recipe-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default RecipeCard;
