import React, {memo} from "react";
import {string, func, number} from "prop-types";
import {connect} from "react-redux";
import MovieCard from "../movie-card/movie-card.jsx";
import {FilmsType, FilmType} from '../../types';

const MovieList = (props) => {
  const {shownCardsNumber, activeItem, filteredFilms} = props;
  const shownFilms = filteredFilms.slice(0, shownCardsNumber);

  return (
    <div className="catalog__movies-list">
      {shownFilms.map(({name, img, preview, genre}) => (
        <MovieCard
          key={name}
          name={name}
          img={img}
          preview={preview}
          genre={genre}
          active={name === activeItem.name}
          {...props}
        />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  activeItem: FilmType,
  filteredFilms: FilmsType,
  filter: string,
  onOpenCard: func,
  shownCardsNumber: number,
  setActiveItem: func,
  removeActiveItem: func,
  setTimer: func,
  removeTimer: func,
};

const mapStateToProps = ({shownCardsNumber}) => ({
  shownCardsNumber,
});

export {MovieList};
export default connect(mapStateToProps)(memo(MovieList));
