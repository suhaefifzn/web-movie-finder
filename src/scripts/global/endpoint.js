const { BASE_URL, API_KEY } = require('./config');

const ENDPOINT = {
  TOP_MOVIES: `${BASE_URL}/movie/top_rated?${API_KEY}`,
  POPULAR_MOVIES: `${BASE_URL}/movie/popular?${API_KEY}`,
  UPCOMING_MOVIES: `${BASE_URL}/movie/upcoming?${API_KEY}`,
  DETAIL_MOVIE: (id) => `${BASE_URL}/movie/${id}?${API_KEY}`,
  SEARCH_MOVIES: (keywords) => `${BASE_URL}/search/movie?${API_KEY}&query=${keywords}`,
};

export default ENDPOINT;