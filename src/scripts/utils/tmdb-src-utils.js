const MAX = 10;

const TmdbSrcUtils = {
  async fetchAPI(endpoint) {
    try {
      const response = await fetch(endpoint);
      const responseJson = await response.json();

      if (responseJson.results) {
        const results = this._getMaxMovies(responseJson.results);
        return results;
      }

      return responseJson;
    } catch (err) {
      return console.log(err.stack);
    }
  },

  _getMaxMovies(movies) {
    return movies.slice(0, MAX);
  },
};

export default TmdbSrcUtils;