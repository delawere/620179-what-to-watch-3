import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionType, Operation} from "./favorites.js";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    favorites: []
  });
});

it(`Reducer should update favorites status by set favorites`, () => {
  expect(
      reducer(
          {
            favorites: []
          },
          {
            type: ActionType.SET_FAVORITES,
            payload: [`test`]
          }
      )
  ).toEqual({
    favorites: [`test`]
  });
});

describe(`Operation work correctly`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();

  it(`Should make a correct API call to load favorites`, () => {
    const loadFav = Operation.loadFavorites();

    apiMock.onGet(`/favorite`).reply(200, [{fake: true}]);

    return loadFav(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_FAVORITES,
        payload: [{fake: true}]
      });
    });
  });
});
