// src/MovieList.js
import React, { useState } from 'react';

const MovieList = () => {
  // Movie data array
  const movies = [
    { title: "Inception", genre: "Sci-Fi", releaseYear: 2010 },
    { title: "The Shawshank Redemption", genre: "Drama", releaseYear: 1994 },
    { title: "The Dark Knight", genre: "Action", releaseYear: 2008 }
  ];

  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const genres = ['All Genres', ...new Set(movies.map(movie => movie.genre))];
  const filteredMovies = selectedGenre === 'All Genres' ? movies : movies.filter(movie => movie.genre === selectedGenre);

  // Function to handle movie click
  const handleMovieClick = (movieTitle) => {
    alert(`You clicked on ${movieTitle}`);
  };

  return (
    <div>
      <h1>Movie List</h1>
      
      {/* Genre Filter Dropdown */}
      <select onChange={(e) => setSelectedGenre(e.target.value)}>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>{genre}</option>
        ))}
      </select>

      {/* Render filtered movie list */}
      <ul style={{ padding: 0, listStyleType: 'none' }}>
        {filteredMovies.map((movie, index) => (
          <li key={index} style={{ margin: '10px 0', padding: '10px', backgroundColor: '#f4f4f4', borderRadius: '5px' }}
          onClick={() => handleMovieClick(movie.title)}
          >
            <h2>{movie.title}</h2>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Release Year:</strong> {movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
