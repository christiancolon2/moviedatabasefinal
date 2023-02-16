import React from 'react';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';

const MoviesList = (props) => {
  const { movies } = props;
  const [selectedMovie, setSelectedMovie] = React.useState(null);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <MovieCard movie={movie} onSelect={handleMovieSelect} />
        </div>
      ))}
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
    </div>
  );
};

export default MoviesList;

