import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <RecipeCard key={recipe.id} name={recipe.name} description={recipe.description} />
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
}

export default RecipeList;
