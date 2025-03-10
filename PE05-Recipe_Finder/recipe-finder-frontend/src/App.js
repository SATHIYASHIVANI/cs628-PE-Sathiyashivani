import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./RecipeList";
import AddRecipe from "./AddRecipe";
import RecipeDetails from "./RecipeDetails";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RecipeList />} />
                <Route path="/add" element={<AddRecipe />} />
                <Route path="/recipe/:id" element={<RecipeDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
