import React from 'react';

const MovieDetails = (props) => {
  const { title, overview, release_date, runtime } = props.movie;

  return (
    <div>
      <h2>{title}</h2>
      <p>{overview}</p>
      <p><strong>Release Date:</strong> {release_date}</p>
      <p><strong>Runtime:</strong> {runtime} minutes</p>
    </div>
  );
};

export default MovieDetails;
