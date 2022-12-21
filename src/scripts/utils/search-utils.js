import swal from 'sweetalert';
import TmdbSrc from '../data/tmdb-src';

const SearchUtils = {
  init({
    form,
    movie,
    content,
    titleElement,
    buttonReset,
  }) {
    this._form = form;
    this._movie = movie;
    this._content = content;
    this._titleElement = titleElement;
    this._buttonReset = buttonReset;

    this._submitForm();
  },

  _clearWhiteSpaceFromMovieTitle(title) {
    return title.trim().replace(/\s+/g, '+').toLowerCase();
  },

  _submitForm() {
    this._form.addEventListener('submit', async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const title = this._movie.value;

      if (title) {
        const fixedTitle = this._clearWhiteSpaceFromMovieTitle(title);
        const movies = await TmdbSrc.searchMovies(fixedTitle);

        if (movies.length > 0) {
          this._moviesFound(movies);
        } else {
          this._moviesNotFound();
        }
      } else {
        this._moviesNotFound();
      }
    });
  },

  _moviesFound(movies) {
    this._content.innerHTML = '';
    this._buttonReset.style.display = 'flex';
    this._titleElement.textContent = 'Search Result';

    movies.forEach((movie) => {
      const cardElement = document.createElement('card-element');
      cardElement.content = movie;
      this._content.appendChild(cardElement);
    });
  },

  _moviesNotFound() {
    swal({
      icon: 'error',
      text: 'Oops, movies not found!',
    });
  },
};

export default SearchUtils;