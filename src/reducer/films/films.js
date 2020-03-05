import {extend} from "../../utils/extend";
import {keysToCamel} from '../../utils/toCamel';
import {ActionCreator as GenresActionCreater} from '../genres/genres.js';

const SHOWN_CARDS_STEP = 8;
const getFilmGenres = (films) => [`All genres`, ...new Set(films.map((film) => film.genre))];

const initialState = {
  films: [],
  shownCardsNumber: SHOWN_CARDS_STEP
};

export const ActionType = {
  SET_FILMS: `SET_FILMS`,
  SHOW_MORE_CARDS: `SHOW_MORE_CARDS`
};

export const ActionCreator = {
  setFilms: (list) => ({
    type: ActionType.SET_FILMS,
    payload: list
  }),
  showMoreCards: () => ({
    type: ActionType.SHOW_MORE_CARDS
  }),

};

export const Operation = {
  loadMovies: () => (dispatch, _, api) => {
    return api.get(`/films`)
          .then(({data}) => {
            dispatch(ActionCreator.setFilms(data.map((it) => keysToCamel(it))));
            dispatch(GenresActionCreater.setGenres(getFilmGenres(data)));
          });
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILMS:
      return extend(state, {
        films: action.payload
      });
    case ActionType.SHOW_MORE_CARDS:
      return extend(state, {
        shownCardsNumber: state.shownCardsNumber + SHOWN_CARDS_STEP
      });
    default:
      return state;
  }
};
