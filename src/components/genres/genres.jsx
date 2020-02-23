import React from "react";
import {array, func, string} from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import {filterFilmsByGenre} from '../../utils/filterFilmsByGenre';
import {FilmsType} from '../../types';


const SELECTED_GENRE_CLASS = `catalog__genres-item--active`;

const Genres = ({genres, genreFilter, films, onSelectGenre}) => {
  const handleOnSelectGenre = (e, genre) => {
    e.preventDefault();

    onSelectGenre(genre, films);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item ${
            genreFilter === genre ? SELECTED_GENRE_CLASS : ``
          }`}
        >
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(e) => handleOnSelectGenre(e, genre)}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
};

Genres.defaultProps = {
  selectedGenre: `All genres`,
  genresList: [],
  onSelectGenre: () => {},
  films: []
};

Genres.propTypes = {
  genres: array,
  genreFilter: string,
  films: FilmsType,
  onSelectGenre: func
};

const mapStateToProps = ({genres, genreFilter, films}) => ({
  genres,
  genreFilter,
  films
});

const mapDispatchToProps = (dispatch) => ({
  onSelectGenre: (genre, films) => {
    dispatch(ActionCreator.selectGenreFilter(genre));
    dispatch(
        ActionCreator.selectFilmsByGenre(filterFilmsByGenre(genre, films))
    );
  }
});

export {Genres};
export default connect(mapStateToProps, mapDispatchToProps)(Genres);
