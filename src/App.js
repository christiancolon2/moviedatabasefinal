import React, { useState, useEffect } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import fetchMovies from './api';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetchMovies();
      setMovies(movies);
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='search-container'>
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchTerm}
        onChange={handleSearch}
        className="search-box"
      />
      {searchTerm ? <MoviesList movies={filteredMovies} /> : null}
    </div>
  );
};

export default App;




