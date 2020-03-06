
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionType, Operation} from "./films.js";

const api = createAPI(() => {});

const films = [
  {
    id: 1,
    name: `film1`,
    genre: `genre1`
  },
  {
    id: 2,
    name: `film2`,
    genre: `genre2`
  },
  {
    id: 3,
    name: `film3`,
    genre: `genre3`
  },
  {
    id: 4,
    name: `film4`,
    genre: `genre4`
  },
];

const SHOWN_CARDS_NUMBER = 8;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    films: [],
    shownCardsNumber: SHOWN_CARDS_NUMBER
  });
});

it(`Reducer should update films by set films`, () => {
  expect(reducer({
    films: [],
  }, {
    type: ActionType.SET_FILMS,
    payload: films,
  })).toEqual({
    films,
  });
});

it(`Reducer should increase shown cards number`, () => {
  expect(reducer({
    shownCardsNumber: SHOWN_CARDS_NUMBER
  }, {
    type: ActionType.SHOW_MORE_CARDS,
  })).toEqual({
    shownCardsNumber: SHOWN_CARDS_NUMBER * 2
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadMovies();

    apiMock
        .onGet(`/films`)
        .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(2);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.SET_FILMS,
            payload: [{fake: true}],
          });
        });
  });
});