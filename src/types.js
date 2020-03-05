
import {shape, arrayOf, string} from 'prop-types';

export const FilmType = shape({
  name: string,
  genre: string
});

export const FilmsType = arrayOf(FilmType);
