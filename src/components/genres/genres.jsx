import React, {memo} from "react";
import {array, func, string} from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import {FilmsType} from '../../types';
import GenresItem from '../genres-item/genres-item.jsx';
import {getGenreFilter, getGenres} from "../../reducer/genres/selectors";
import {getFilms} from "../../reducer/films/selectors";


const SELECTED_GENRE_CLASS = `catalog__genres-item--active`;

const Genres = ({genres = [], genreFilter, films, onSelectGenre}) => {
  const handleOnSelectGenre = (e, genre) => {
    e.preventDefault();

    onSelectGenre(genre, films);
  };

  const preparedList = genres.map((genre) => {
    const wrapperHandlerOnSelectGenre = (e) => handleOnSelectGenre(e, genre);
    const activeClass = genreFilter === genre ? SELECTED_GENRE_CLASS : ``;

    return (
      <GenresItem
        key={genre}
        genre={genre}
        onClick={wrapperHandlerOnSelectGenre}
        activeClass={activeClass}/>
    );
  });

  return (
    <ul className="catalog__genres-list">
      {preparedList}
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

const mapStateToProps = (state) => ({
  genres: getGenres(state),
  genreFilter: getGenreFilter(state),
  films: getFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSelectGenre: (genre) => {
    dispatch(ActionCreator.selectGenreFilter(genre));
  }
});

export {Genres};
export default connect(mapStateToProps, mapDispatchToProps)(memo(Genres));
