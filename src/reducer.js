import films from './mocks/films';
import {extend} from "./utils.js";

const ALL_GENRES_FILTER = `ALL GENRES`;

const initialState = {
  genreFilter: `All genres`,
  filmsByGenre: films,
};

export const ActionType = {
  SELECT_GENRE_FILTER: `SELECT_GENRE_FILTER`,
  SELECT_FILMS_BY_GENRE: `SELECT_FILMS_BY_GENRE`,
};

export const ActionCreator = {
  selectGenreFilter: (genre) => ({
    type: ActionType.SELECT_GENRE_FILTER,
    payload: genre
  }),
  selectFilmsByGenre: (genre) => ({
    type: ActionType.SELECT_FILMS_BY_GENRE,
    payload: filterFilmsByGenre(genre, films)
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_GENRE_FILTER:
      return extend(state, {
        genreFilter: action.payload
      });
    case ActionType.SELECT_FILMS_BY_GENRE:
      return extend(state, {
        filmsByGenre: action.payload
      });
    default:
      return state;
  }
};

export const filterFilmsByGenre = (genre, filmsList) => {
  const selectedGenre = genre.toUpperCase();

  return selectedGenre === ALL_GENRES_FILTER
    ? filmsList
    : filmsList.filter((film) => film.genre.toUpperCase() === selectedGenre);
};

export default reducer;
