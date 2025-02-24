import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Cities Application</h1>
      <div className="nav-links">
        <Link to="/cities">Cities List</Link>
        <Link to="/add-city">Add City</Link>
      </div>
    </nav>
  );
};

export default Navbar;
