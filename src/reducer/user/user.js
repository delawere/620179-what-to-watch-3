import {extend} from "../../utils/extend";

const NO_AUTH = `NO_AUTH`;
const AUTH = `AUTH`;

const initialState = {
  authorizationStatus: NO_AUTH,
};

export const ActionType = {
  SET_AUTH: `SET_AUTH`,
};

export const ActionCreator = {
  setAuth: (status) => ({
    type: ActionType.SET_AUTH,
    payload: status
  }),
};

export const Operation = {
  check: () => (_, __, api) => {
    return api.get(`/login`);
  },
  login: ({email, password}) => (dispatch, _, api) => {
    return api.post(`/login`, {
      email,
      password
    }).then(() => {
      dispatch(ActionCreator.setAuth(AUTH));
    });
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTH:
      return extend(state, {
        authorizationStatus: action.payload
      });
    default:
      return state;
  }
};

