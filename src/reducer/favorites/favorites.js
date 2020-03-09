import {extend} from "../../utils/extend";
import {keysToCamel} from '../../utils/toCamel';

const initialState = {
  favorites: []
};

export const ActionType = {
  SET_FAVORITES: `SET_FAVORITES`
};

export const ActionCreator = {
  setFavorites: (list) => ({
    type: ActionType.SET_FAVORITES,
    payload: list
  }),
};

export const Operation = {
  loadFavorites: () => (dispatch, _, api) => {
    return api.get(`/favorite`)
          .then(({data: favorites}) => {
            dispatch(ActionCreator.setFavorites(favorites.map((film) => keysToCamel(film))));
          });
  },

  setFavoriteStatus: (id, status, cb) => (_, _1, api) => {
    return api.post(`/favorite/${id}/${status}`)
    .then(() => {
      if (typeof cb === `function`) {
        cb();
      }
    });
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FAVORITES:
      return extend(state, {
        favorites: action.payload
      });
    default:
      return state;
  }
};
