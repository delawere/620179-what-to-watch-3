import React, {memo} from 'react';
import {string, func} from 'prop-types';

const GenresItem = ({genre, onClick, activeClass}) => (
  <li
    key={genre}
    className={`catalog__genres-item ${activeClass}`}
  >
    <a
      href="#"
      className="catalog__genres-link"
      onClick={onClick}
    >
      {genre}
    </a>
  </li>
);

GenresItem.propTypes = {
  genre: string,
  onClick: func,
  activeClass: string,
};

export default memo(GenresItem);
