import TmdbSrc from '../../data/tmdb-src';
import '../../components/card-element';
import '../../components/hero-element';
import '../../components/search-element';
import TemplateCreator from '../template/template-creator';
import ButtonsContentUtils from '../../utils/buttons-content-utils';
import SearchUtils from '../../utils/search-utils';

const Home = {
  async render() {
    return `
      <!-- Hero -->
      <hero-element></hero-element>

      <!-- Content -->
      <div class="content" id="content">
        <!-- Buttons -->
          ${TemplateCreator.buttonsContent()}

        <!-- Title Content  -->
        <div class="main-title">
          <h2>Top Rated Movies</h2>
        </div>
        <div class="card-movies"></div>
      </div>
    `;
  },

  async afterRender() {
    const movies = await TmdbSrc.topMovies();
    const contentElement = document.querySelector('.card-movies');
    const titleElement = document.querySelector('.main-title h2');
    const buttonReset = document.querySelector('.button-reset');

    movies.forEach((movie) => {
      const cardElement = document.createElement('card-element');
      cardElement.content = movie;
      contentElement.appendChild(cardElement);
    });

    SearchUtils.init({
      form: document.querySelector('#searchForm'),
      movie: document.querySelector('#movieTitleInput'),
      content: contentElement,
      buttonReset,
      titleElement,
    });

    ButtonsContentUtils.init({
      contentElement,
      titleElement,
      reset: buttonReset,
      topRated: document.querySelector('.buttons-main__top-rated'),
      popular: document.querySelector('.buttons-main__popular'),
      upcoming: document.querySelector('.buttons-main__upcoming'),
    });
  },
};

export default Home;