import React from "react";
import RecipeCard from "./Recipecard.js";

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
