import React, {memo} from 'react';
import {exact, string, number, func} from 'prop-types';
import MovieList from '../movie-list/movie-list.jsx';
import Genres from '../genres/genres.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import withActiveCard from '../../hocs/with-active-card/with-active-card.jsx';
import {FilmsType} from '../../types';

const MovieListWithActiveCard = withActiveCard(MovieList);

const Main = ({promoData: {name, genre, releaseDate}, onOpenCard, filteredFilms, setActivePlayer}) => {
  const handlePlayButtonClick = () => setActivePlayer(true);

  return (
  <>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{releaseDate}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={handlePlayButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="#d9cd8d">
                  <path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <Genres />

        <MovieListWithActiveCard onOpenCard={onOpenCard} filteredFilms={filteredFilms}/>

        <div className="catalog__more">
          <ShowMoreButton filteredFilms={filteredFilms}/>
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </>
  );
};


Main.propTypes = {
  promoData: exact({
    name: string,
    genre: string,
    releaseDate: number
  }),
  onOpenCard: func,
  filteredFilms: FilmsType,
  setActivePlayer: func,
};

export default memo(Main);
