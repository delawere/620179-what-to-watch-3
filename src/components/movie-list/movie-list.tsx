// Libs
import * as React from 'react';
import {connect} from "react-redux";
// Utils
import {FilmsType, FilmType} from '../../types';
import {getShownCardsNumber} from "../../reducer/films/selectors.js";
// Components
import MovieCard from "../movie-card/movie-card";

interface Props {
  activeItem?: FilmType;
  filteredFilms: FilmsType;
  filter?: string;
  onOpenCard: () => void;
  shownCardsNumber: number;
  setActiveItem: () => void;
  removeActiveItem: () => void;
  setTimer: () => void;
  removeTimer: () => void;
  maxCardsNumber?: number; 
  openedFilmId?: number;
}

const MovieList = (props: Props) => {
  const {shownCardsNumber, activeItem, filteredFilms, maxCardsNumber, openedFilmId} = props;
  const shownFilms = filteredFilms.slice(0, 
    maxCardsNumber === undefined 
      ? shownCardsNumber 
      : maxCardsNumber
  );

  const getFilmsWithoutOpened = (films, openedId) => films.filter(({id}) => id !== parseInt(openedId, 10));

  return (
    <div className="catalog__movies-list">
      {getFilmsWithoutOpened(shownFilms, openedFilmId)
        .map((film) => {
        const {name, id} = film;
        return (
          <MovieCard
            key={id}
            active={name === activeItem.name}
            {...film}
            {...props}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  shownCardsNumber: getShownCardsNumber(state)
});

export {MovieList};
export default connect(mapStateToProps)(React.memo(MovieList));
