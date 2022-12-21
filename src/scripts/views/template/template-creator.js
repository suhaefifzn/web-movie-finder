import CONFIG from '../../global/config';

const feather = require('feather-icons');

const fixVoteAverage = (number) => Math.round(number * 10) / 10;
const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const TemplateCreator = {
  navBar() {
    return `
      <nav class="navbar">
        <a href="#/" class="navbar__title">
          <span class="navbar__title-1">VIN</span><span class="navbar__title-2">DER</span>
        </a>
        <ul class="navbar-menu">
          <li class="navbar-item">
            <a href="#/" class="navbar-item-link">
              ${feather.icons.home.toSvg({ class: 'navbar__icons' })}
              <span>
                Home
              </span>
            </a>
          </li>
          <li class="navbar-item">
            <a href="#/favorite" class="navbar-item-link">
              ${feather.icons.heart.toSvg({ class: 'navbar__icons' })}
              <span>
                Favorite
              </span>
            </a>
          </li>
          <li class="navbar-item">
            <a
              href="https://github.com/suhaefifzn/web-movie-finder"
              class="navbar-item-link"
              target="_blank"
              rel="noopener"
            >
              ${feather.icons.info.toSvg({ class: 'navbar__icons' })}
              <span>
                About
              </span>
            </a>
          </li>
        </ul>
        <button class="btn-hamburger" type="button">
          ${feather.icons.menu.toSvg({ class: 'hamburger-icon' })}
        </button>
      </nav>
    `;
  },

  searchBar() {
    return `
      <form id="searchForm">
        <input
          class="search-input"
          placeholder="Search movies ..."
          type="text"
          id="movieTitleInput"
          autocomplete="off"
        >
        </input>
        <button class="btn-search">
          ${feather.icons.search.toSvg({ class: 'search-icon' })}
        </button>
      </form>
    `;
  },

  hero() {
    return `
      <div class="main-hero">
        <img src="./hero/main-hero.png"/>
      </div>
      <div class="second-hero">
        <div class="second-hero__img">
          <img src="./hero/secondary-hero.png"/>
        </div>
        <div class="second-hero__text">
          <h1 class="hero__title">
            <span class="hero__title-1">MOVIE</span>
            <span class="hero__title-2">FINDER</span>
          </h1>
          <p>
            Find and save your favorite movies!
          </p>
          <div class="second-hero__search-form">
            <search-element></search-element>
          </div>
        </div>
      </div>
    `;
  },

  card(content) {
    return `
      <div class="card">
        <div class="card-img">
          <img
            class="lazyload"
            data-src="${CONFIG.IMG_URL_W500}${content.backdrop_path || content.poster_path}"
          />
        </div>
        <div class="card-text">
          <div class="card-text__title">
            <a href="#/detail/${content.id}">${content.title}</a>
          </div>
          <div class="card-text__scores">
            <span class="card-text__scores-rate" title="Rating">
              ${feather.icons.star.toSvg({ class: 'star-icon' })} ${content.vote_average}
            </span>
            <span title="Vote count">| ${content.vote_count}</span>
          </div>
        </div>
      </div>
    `;
  },

  buttonsContent() {
    return `
      <div class="buttons-wrapper">
        <div class="buttons-main">
          <button class="buttons-main__top-rated" type="button">
            Top Rated
          </button>
          <button class="buttons-main__popular" type="button">Popular</button>
          <button class="buttons-main__upcoming" type="button">Upcoming</button>
        </div>
        <button class="button-reset" type="button">
          ${feather.icons['rotate-ccw'].toSvg({ class: 'reset-icon' })}
        </button>
      </div>
    `;
  },

  movieDetail(movie) {
    const img = movie.backdrop_path || movie.poster_path;
    const genres = movie.genres.map((genre) => genre.name);

    return `
      <div class="detail-img">
        <img class="lazyload" data-src="${CONFIG.IMG_URL_ORIGINAL}${img}"/>
      </div>
      <div class="detail-description">
        <div class="detail-description_header">
          <div class="detail-description_rating">
            <span class="rating-vote_icon">
              ${feather.icons.star.toSvg({ class: 'star-icon' })}
            </span>
            <span class="rating-vote_txt" title="Vote Average">
              ${fixVoteAverage(movie.vote_average)}
            </span>
            <span>
              |
            </span>
            <span class="rating-vote_txt" title="Vote Count">
              ${movie.vote_count}
            </span>
          </div>
          <div class="favorite-button">
            ${this.likeButton()}
          </div>
        </div>
        <h1 class="detail-description_title_movie">
          ${movie.title}
        </h1>
        <h2 class="detail-description_title_section">
          Release:
        </h2>
        <p>
          ${movie.release_date}
        </p>
        <h2 class="detail-description_title_section">
          Genres:
        </h2>
        <p>
          ${genres.join(', ')}
        </p>
        <h2 class="detail-description_title_section">
          Budget:
        </h2>
        <p>
          ${usdFormatter.format(movie.budget)}
        </p>
        <h2 class="detail-description_title_section">
          Revenue:
        </h2>
        <p>
          ${usdFormatter.format(movie.revenue)}
        </p>
        <h2 class="detail-description_title_section">
          Overview:
        </h2>
        <p>
          ${movie.overview}
        </p>
      </div>
    `;
  },

  likeButton() {
    return `
      <button type="button" id="likeButton">
        ${feather.icons.heart.toSvg({ class: 'btn-heart-icon' })}
      </button>
    `;
  },

  unlikeButton() {
    return `
      <button type="button" id="unlikeButton">
        ${feather.icons.trash.toSvg({ class: 'btn-trash-icon' })}
      </button>
    `;
  },
};

export default TemplateCreator;