import React, { useState } from "react"; 
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

const sampleRecipes = [
  { id: 1, name: "Pasta", description: "Delicious homemade pasta." },
  { id: 2, name: "Pizza", description: "Cheesy pepperoni pizza." },
];

function App() {
  const [filteredRecipes, setFilteredRecipes] = useState(sampleRecipes);

  const handleSearch = (query) => {
    const filtered = sampleRecipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
      </header>
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={filteredRecipes} />
      <Footer />
    </div>
  );
}

export default App;
