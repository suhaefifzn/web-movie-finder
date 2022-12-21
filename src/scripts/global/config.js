const CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  IMG_URL_W500: 'https://image.tmdb.org/t/p/w500',
  IMG_URL_ORIGINAL: 'https://image.tmdb.org/t/p/original',
  API_KEY: `api_key=${process.env.API_KEY}`,
  DATABASE_NAME: 'vinder-idb',
  DATABASE_VERSION: '1',
  OBJECT_STORE_NAME: 'movies',
};

module.exports = CONFIG;