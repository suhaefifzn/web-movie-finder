import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import '../../components/card-element';

const feather = require('feather-icons');

const Favorite = {
  async render() {
    return `
      <div class="content-favorite-movies">
        <div class="main-title">
          ${feather.icons.heart.toSvg({ class: 'star-icon' })}
          <h2>Favorite Movies</h2>
        </div>
        <div class="card-movies">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const movies = await FavoriteMovieIdb.getAllMovies();
    const cardMoviesElement = document.querySelector('.card-movies');

    if (movies.length === 0) {
      const pElement = document.createElement('p');
      pElement.textContent = 'You don\'t have any favorite movies.';
      cardMoviesElement.appendChild(pElement);
    } else {
      movies.forEach((movie) => {
        const cardElement = document.createElement('card-element');
        cardElement.content = movie;
        cardMoviesElement.appendChild(cardElement);
      });
    }
  },
};

export default Favorite;