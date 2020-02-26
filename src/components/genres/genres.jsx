import React, {memo} from "react";
import {array, func, string} from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import {filterFilmsByGenre} from '../../utils/filterFilmsByGenre';
import {FilmsType} from '../../types';
import GenresItem from '../genres-item/genres-item.jsx';


const SELECTED_GENRE_CLASS = `catalog__genres-item--active`;

const Genres = ({genres, genreFilter, films, onSelectGenre}) => {
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
export default connect(mapStateToProps, mapDispatchToProps)(memo(Genres));
