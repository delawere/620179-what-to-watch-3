
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionType, Operation} from "./user.js";

const api = createAPI(() => {});

const NO_AUTH = `NO_AUTH`;
const AUTH = `AUTH`;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: NO_AUTH,
    user: {}
  });
});

it(`Reducer should update auth status by set status`, () => {
  expect(reducer({
    authorizationStatus: NO_AUTH,
  }, {
    type: ActionType.SET_AUTH,
    payload: `New Auth Status`,
  })).toEqual({
    authorizationStatus: `New Auth Status`
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to check`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuth = Operation.check();

    apiMock
        .onGet(`/login`)
        .reply(200);

    return checkAuth(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(2);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.SET_AUTH,
            payload: AUTH,
          });
        });
  });

  it(`Should make a correct API call to login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const login = Operation.login({
      email: `fakeemail@fake.com`,
      password: `123456`
    });

    apiMock
        .onPost(`/login`)
        .reply(200);

    return login(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.SET_AUTH,
            payload: AUTH,
          });
        });
  });
});