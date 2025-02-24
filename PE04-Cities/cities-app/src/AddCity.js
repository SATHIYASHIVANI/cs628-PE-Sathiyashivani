import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCity = ({ setCities }) => {
  const [city, setCity] = useState({ name: "", country: "", population: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCity({ ...city, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCities((prevCities) => [...prevCities, { ...city, id: prevCities.length + 1 }]);
    navigate("/cities"); // Redirect to cities list
  };

  return (
    <div>
      <h2>Add City</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="City Name" onChange={handleChange} required />
        <input type="text" name="country" placeholder="Country" onChange={handleChange} required />
        <input type="text" name="population" placeholder="Population" onChange={handleChange} required />
        <button type="submit">Add City</button>
      </form>
    </div>
  );
};

export default AddCity;
