import TmdbSrc from '../../data/tmdb-src';
import Parser from '../../routes/parser';
import LikeButtonUtils from '../../utils/like-button-utils';
import TemplateCreator from '../template/template-creator';

const Detail = {
  async render() {
    return `
      <article id="detail"></article>
    `;
  },

  async afterRender() {
    // get movie id from url
    const url = Parser.parseActiveUrlWithoutCombiner();
    const movie = await TmdbSrc.detailMovie(url.id);

    // get html element with detail id
    const detailElement = document.querySelector('#detail');

    detailElement.innerHTML = TemplateCreator.movieDetail(movie);

    // Like button initiator
    LikeButtonUtils.init({
      container: document.querySelector('.favorite-button'),
      movie: {
        id: movie.id,
        title: movie.title,
        genres: movie.genres,
        backdrop_path: movie.backdrop_path,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
        overview: movie.overview,
      },
    });
  },
};

export default Detail;