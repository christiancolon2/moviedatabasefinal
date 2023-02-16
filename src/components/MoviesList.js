import React from 'react';
import MovieCard from './MovieCard';

const MoviesList = (props) => {
  return (
    <div>
      {props.movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
