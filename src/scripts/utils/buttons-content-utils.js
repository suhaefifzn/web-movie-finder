import TmdbSrc from '../data/tmdb-src';

const ButtonsContentUtils = {
  init({
    titleElement,
    contentElement,
    topRated,
    popular,
    upcoming,
    reset,
  }) {
    this._title = titleElement;
    this._content = contentElement;
    this._topRated = topRated;
    this._popular = popular;
    this._upcoming = upcoming;
    this._reset = reset;

    this._clickResetButton();
    this._clickTopRatedButton();
    this._clickPopularButton();
    this._clickUpcomingButton();
  },

  _clickResetButton() {
    this._reset.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const movies = await TmdbSrc.topMovies();
      this._showMovies(movies, 'Top Rated Movies');
      this._reset.style.display = 'none';
    });
  },

  _clickTopRatedButton() {
    this._topRated.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const movies = await TmdbSrc.topMovies();
      this._showMovies(movies, 'Top Rated Movies');
      this._reset.style.display = 'none';
    });
  },

  _clickPopularButton() {
    this._popular.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const movies = await TmdbSrc.popularMovies();
      this._showMovies(movies, 'Popular Movies');
      this._reset.style.display = 'none';
    });
  },

  _clickUpcomingButton() {
    this._upcoming.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const movies = await TmdbSrc.upcomingMovies();
      this._showMovies(movies, 'Upcoming Movies');
      this._reset.style.display = 'none';
    });
  },

  _showMovies(movies, title) {
    this._title.textContent = title;
    this._content.innerHTML = '';
    movies.forEach((movie) => {
      const cardElement = document.createElement('card-element');
      cardElement.content = movie;
      this._content.appendChild(cardElement);
    });
  },
};

export default ButtonsContentUtils;