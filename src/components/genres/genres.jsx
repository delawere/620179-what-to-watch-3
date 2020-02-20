import React from 'react';
import {array, func, string} from 'prop-types';

const SELECTED_GENRE_CLASS = `catalog__genres-item--active`;

const Genres = ({selectedGenre, genresList, onSelectGenre}) => {
  const handleOnSelectGenre = (e, genre) => {
    e.preventDefault();

    onSelectGenre(genre);
  };

  return (<ul className='catalog__genres-list'>
    {genresList.map((genre) =>
      <li key={genre}
        className={`catalog__genres-item ${selectedGenre === genre ? SELECTED_GENRE_CLASS : ``}`}>
        <a
          href="#"
          className="catalog__genres-link"
          onClick={(e) => handleOnSelectGenre(e, genre)}>
          {genre}
        </a>
      </li>)}
  </ul>);
};

Genres.defaultProps = {
  selectedGenre: `All genres`,
  genresList: [],
  onSelectGenre: () => {}
};

Genres.propTypes = {
  selectedGenre: string,
  genresList: array,
  onSelectGenre: func,
};

export default Genres;
