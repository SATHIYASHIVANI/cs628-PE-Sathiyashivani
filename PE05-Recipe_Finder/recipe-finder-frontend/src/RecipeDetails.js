import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function RecipeDetails() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/recipes/${id}`)
            .then(response => setRecipe(response.data))
            .catch(error => console.log(error));
    }, [id]);

    if (!recipe) return <h2>Loading...</h2>;

    return (
        <div>
            <h2>{recipe.name}</h2>
            <h4>Ingredients:</h4>
            <ul>
                {recipe.ingredients.map((ing, index) => (
                    <li key={index}>{ing}</li>
                ))}
            </ul>
            <h4>Instructions:</h4>
            <p>{recipe.instructions}</p>
            <Link to={`/update/${id}`}>Edit</Link> | <Link to="/">Back</Link>
        </div>
    );
}

export default RecipeDetails;
