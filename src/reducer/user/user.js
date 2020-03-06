import {extend} from "../../utils/extend";
import {keysToCamel} from '../../utils/toCamel';

const NO_AUTH = `NO_AUTH`;
const AUTH = `AUTH`;

const initialState = {
  authorizationStatus: NO_AUTH,
  user: {}
};

export const ActionType = {
  SET_AUTH: `SET_AUTH`,
  SET_USER: `SET_USER`,
};

export const ActionCreator = {
  setAuth: (status) => ({
    type: ActionType.SET_AUTH,
    payload: status
  }),
  setUser: (data) => ({
    type: ActionType.SET_USER,
    payload: data
  }),
};

export const Operation = {
  check: () => (dispatch, _, api) => {
    return api.get(`/login`).then(({data}) => {
      dispatch(ActionCreator.setAuth(AUTH));
      dispatch(ActionCreator.setUser(keysToCamel(data)));
    });
  },
  login: ({email, password}) => (dispatch, _, api) => {
    return api.post(`/login`, {
      email,
      password
    }).then(() => {
      dispatch(ActionCreator.setAuth(AUTH));
      Operation.check();
    });
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTH:
      return extend(state, {
        authorizationStatus: action.payload
      });
    case ActionType.SET_USER:
      return extend(state, {
        user: action.payload
      });
    default:
      return state;
  }
};

