import ENDPOINT from '../global/endpoint';
import TmdbSrcUtils from '../utils/tmdb-src-utils';

class TmdbSrc {
  static searchMovies(keywords) {
    return TmdbSrcUtils.fetchAPI(ENDPOINT.SEARCH_MOVIES(keywords));
  }

  static popularMovies() {
    return TmdbSrcUtils.fetchAPI(ENDPOINT.POPULAR_MOVIES);
  }

  static upcomingMovies() {
    return TmdbSrcUtils.fetchAPI(ENDPOINT.UPCOMING_MOVIES);
  }

  static topMovies() {
    return TmdbSrcUtils.fetchAPI(ENDPOINT.TOP_MOVIES);
  }

  static detailMovie(id) {
    return TmdbSrcUtils.fetchAPI(ENDPOINT.DETAIL_MOVIE(id));
  }
}

export default TmdbSrc;