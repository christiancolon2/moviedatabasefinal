const API_KEY = 'e217684a58bfbf8f16f9afd90df50036';
const API_BASE_URL = 'https://api.themoviedb.org/3/';

const fetchMovies = async () => {
  const response = await fetch(`${API_BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  const data = await response.json();

  return data.results;
};








export default fetchMovies;
