import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const recipeData = {
            name,
            ingredients: ingredients.split(",").map(ing => ing.trim()), // Convert to array
            instructions,
        };

        try {
            await axios.post("http://localhost:5000/recipes", recipeData);
            navigate("/");
        } catch (error) {
            console.error("Error adding recipe:", error);
        }
    };

    return (
        <div>
            <h2>Add Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Recipe Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <textarea placeholder="Ingredients (comma-separated)" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
                <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
}

export default AddRecipe;
