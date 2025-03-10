import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/recipes")
            .then(response => setRecipes(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h2>Recipes</h2>
            <Link to="/add">Add Recipe</Link>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe._id}>
                        <Link to={`/recipe/${recipe._id}`}>{recipe.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeList;
