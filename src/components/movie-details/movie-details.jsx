// Libs
import React, {memo} from "react";
import {func, object, bool, array} from "prop-types";
import {connect} from "react-redux";
import {Route, Switch, Link, withRouter} from "react-router-dom";
// Utils
import {FilmsType, FilmType, HistoryType} from "../../types";
import {LOGIN} from "../../router/paths.js";
import {Operation as FavoritesOperation} from "../../reducer/favorites/favorites.js";
import {getFilms} from "../../reducer/films/selectors.js";
import withActiveCard from "../../hocs/with-active-card/with-active-card.jsx";
import {getIsAuth} from "../../reducer/user/selectors";
import {getFavorites} from "../../reducer/favorites/selectors";
// Components
import MovieList from "../movie-list/movie-list.jsx";
import Tabs from "../tabs/tabs.jsx";
import MyListButton from "../my-list-button/my-list-button.jsx";
import Avatar from "../avatar/avatar.jsx";

const MovieListWithActiveCard = withActiveCard(MovieList);

const MovieDetails = ({
  isAuth,
  match,
  history,
  films = [],
  onOpenCard,
  filteredFilms,
  updateFavorite,
  favorites = [],
  loadFavorites,
}) => {
  const {
    path,
    url,
    params: {id}
  } = match;
  const data = films.find(({id: movieId}) => movieId.toString() === id) || {};
  const {
    name,
    genre,
    posterImage,
    released,
    backgroundColor,
    backgroundImage,
  } = data;
  const handlePlayButtonClick = () => {
    history.push(`${url}/player`);
  };

  const renderAddReview = () => {
    if (isAuth) {
      return (
        <Link to={`${url}/review`} className="btn movie-card__button">
          Add review
        </Link>
      );
    }

    return null;
  };

  const isFavorite = !!favorites.find((film) => film.id === parseInt(id, 10));

  const handleOnClickMyList = () => {
    if (!isAuth) {
      history.push(LOGIN);
      return;
    }

    updateFavorite(id, isFavorite ? 0 : 1, loadFavorites);
  };

  return (
    <>
    <section
      className="movie-card movie-card--full"
      style={{
        backgroundColor
      }}
    >
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <Avatar />
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <button
                className="btn btn--play movie-card__button"
                type="button"
                onClick={handlePlayButtonClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  fill="#d9cd8d"
                >
                  <path d="M8 5v14l11-7z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <span>Play</span>
              </button>
              <MyListButton
                isFavorite={isFavorite}
                isAuth={isAuth}
                onClick={handleOnClickMyList}
              />
              {renderAddReview()}
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img
              src={posterImage}
              alt={`${name} poster`}
              width="218"
              height="327"
            />
          </div>

          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                <li className="movie-nav__item">
                  <Link to={`${url}`} className="movie-nav__link">
                    Overview
                  </Link>
                </li>
                <li className="movie-nav__item">
                  <Link to={`${url}/details`} className="movie-nav__link">
                    Details
                  </Link>
                </li>
                <li className="movie-nav__item">
                  <Link to={`${url}/reviews`} className="movie-nav__link">
                    Reviews
                  </Link>
                </li>
              </ul>
            </nav>

            <div>
              <Switch>
                <Route exact path={`${path}`}>
                  <Tabs {...data} />
                </Route>
                <Route path={`/films/${id}/details`}>
                  <Tabs {...data} tab='details'/>
                </Route>
                <Route path={`/films/${id}/reviews`}>
                  <Tabs {...data} tab='reviews'/>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <MovieListWithActiveCard
          onOpenCard={onOpenCard}
          filteredFilms={filteredFilms}
        />
      </section>
    </div>
  </>
  );
};

MovieDetails.propTypes = {
  isAuth: bool,
  history: HistoryType,
  match: object,
  cardData: FilmType,
  films: FilmsType,
  onOpenCard: func,
  filteredFilms: FilmsType,
  setActivePlayer: func,
  updateFavorite: func,
  favorites: array,
  loadFavorites: func,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  isAuth: getIsAuth(state),
  favorites: getFavorites(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorites() {
    dispatch(FavoritesOperation.loadFavorites());
  },
  updateFavorite: (id, status, cb) => {
    dispatch(FavoritesOperation.setFavoriteStatus(id, status, cb));
  }
});

export {MovieDetails};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(memo(MovieDetails)));
