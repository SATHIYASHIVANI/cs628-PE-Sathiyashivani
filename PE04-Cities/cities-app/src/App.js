import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Navbar"; // Import Navbar
import CitiesList from "./CitiesList";
import AddCity from "./AddCity";
import CityDetails from "./CityDetails";

function App() {
  // Sample cities data
  const [cities, setCities] = useState([
    { id: 1, name: "Seattle", country: "USA", population: "750K" },
  ]);

  return (
    <Router>
      <Navbar />  {/* Navbar at the top */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/cities" />} />
          <Route path="/cities" element={<CitiesList cities={cities} />} />
          <Route path="/add-city" element={<AddCity setCities={setCities} />} />
          <Route path="/cities/:id" element={<CityDetails cities={cities} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
