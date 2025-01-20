// src/App.js
import React from 'react';
import './style.css';  // Updated to import style.css
import MovieList from './MovieList';  // Importing MovieList component

const App = () => {
  return (
    <div className="App">
      <MovieList />  {/* Render the MovieList component */}
    </div>
  );
};

export default App;
