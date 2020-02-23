
import {exact, arrayOf, string} from 'prop-types';

export const FilmType = exact({
  name: string,
  img: string,
  preview: string,
  genre: string
});

export const FilmsType = arrayOf(FilmType);
