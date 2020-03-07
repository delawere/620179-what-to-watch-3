
import {shape, exact, arrayOf, string, number, bool} from 'prop-types';

export const FilmType = shape({
  backgroundColor: string,
  backgroundImage: string,
  description: string,
  director: string,
  genre: string,
  id: number,
  isFavorite: bool,
  name: string,
  posterImage: string,
  previewImage: string,
  previewVideoLink: string,
  rating: number,
  released: number,
  runTime: number,
  scoresCount: number,
  starring: arrayOf(string),
  videoLink: string
});

export const FilmsType = arrayOf(FilmType);

export const CommentType = exact({
  id: number,
  user: exact({
    id: number,
    name: string
  }),
  rating: number,
  comment: string,
  date: string
});
