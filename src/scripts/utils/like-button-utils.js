import swal from 'sweetalert';
import FavoriteMovieIdb from '../data/favorite-movie-idb';
import TemplateCreator from '../views/template/template-creator';

const LikeButtonUtils = {
  async init({ container, movie }) {
    this._container = container;
    this._movie = movie;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._movie;

    if (await this._isMovieExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isMovieExist(id) {
    const movie = await FavoriteMovieIdb.getMovie(id);
    return !!movie;
  },

  _renderLike() {
    this._container.innerHTML = TemplateCreator.likeButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', () => {
      swal({
        icon: 'success',
        text: 'Successfully added movie to favorite list!',
      }).then(async () => {
        await FavoriteMovieIdb.putMovie(this._movie);
        this._renderButton();
      });
    });
  },

  _renderLiked() {
    this._container.innerHTML = TemplateCreator.unlikeButton();

    const unlikeButton = document.querySelector('#unlikeButton');
    unlikeButton.addEventListener('click', () => {
      swal({
        icon: 'warning',
        title: 'Are you sure?',
        text: 'The movie will be removed from the favorites list!',
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal({
            icon: 'success',
            text: 'Successfully removed the film',
          }).then(async () => {
            await FavoriteMovieIdb.deleteMovie(this._movie.id);
            this._renderButton();
          });
        } else {
          swal({
            text: 'This film is not removed',
          });
        }
      });
    });
  },
};

export default LikeButtonUtils;