import {extend} from "./utils/extend";

const SHOWN_CARDS_STEP = 8;

const initialState = {
  genres: [],
  films: [],
  genreFilter: `All genres`,
  filmsByGenre: [],
  shownCardsNumber: SHOWN_CARDS_STEP
};

export const ActionType = {
  SET_GENRES: `SET_GENRES`,
  SET_FIMLS: `SET_FILMS`,
  SELECT_GENRE_FILTER: `SELECT_GENRE_FILTER`,
  SELECT_FILMS_BY_GENRE: `SELECT_FILMS_BY_GENRE`,
  SHOW_MORE_CARDS: `SHOW_MORE_CARDS`
};

export const ActionCreator = {
  setGenres: (list) => ({
    type: ActionType.SET_GENRES,
    payload: list
  }),
  setFilms: (list) => ({
    type: ActionType.SET_FIMLS,
    payload: list
  }),
  selectGenreFilter: (genre) => ({
    type: ActionType.SELECT_GENRE_FILTER,
    payload: genre
  }),
  selectFilmsByGenre: (list) => ({
    type: ActionType.SELECT_FILMS_BY_GENRE,
    payload: list
  }),
  showMoreCards: () => ({
    type: ActionType.SHOW_MORE_CARDS
  }),

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRES:
      return extend(state, {
        genres: action.payload
      });
    case ActionType.SET_FIMLS:
      return extend(state, {
        films: action.payload
      });
    case ActionType.SELECT_GENRE_FILTER:
      return extend(state, {
        genreFilter: action.payload
      });
    case ActionType.SELECT_FILMS_BY_GENRE:
      return extend(state, {
        filmsByGenre: action.payload
      });
    case ActionType.SHOW_MORE_CARDS:
      return extend(state, {
        shownCardsNumber: state.shownCardsNumber + SHOWN_CARDS_STEP
      });
    default:
      return state;
  }
};

export default reducer;
