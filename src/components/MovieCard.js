const MovieCard = (props) => {
  const { title, overview, poster_path, release_date } = props.movie;

  return (
    <div style={styles.cardContainer}>
      <img style={styles.poster} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.overview}>{overview}</p>
      <p style={styles.releaseDate}>{release_date}</p>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    margin: '20px'
  },
  poster: {
    width: '200px',
    height: '300px',
    borderRadius: '10px'
  },
  title: {
    marginTop: '20px'
  },
  overview: {
    textAlign: 'center',
    marginTop: '20px'
  },
  releaseDate: {
    marginTop: '20px'
  }
};

export default MovieCard;
