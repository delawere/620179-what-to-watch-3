
import reducer, {ActionType, filterFilmsByGenre} from "./reducer.js";

const films = [
  {
    name: `name1`,
    img: `img/name1.jpg`,
    genre: `test1`,
    preview: `test1`,
  },
  {
    name: `name2`,
    img: `img/name2.jpg`,
    genre: `test2`,
    preview: `test2`,
  },
  {
    name: `name3`,
    img: `img/name3.jpg`,
    genre: `test3`,
    preview: `test4`,
  },
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer({
    genreFilter: `All genres`,
    filmsByGenre: films,
  }, {})).toEqual({
    genreFilter: `All genres`,
    filmsByGenre: films,
  });
});

it(`Reducer should set current genre by a given value`, () => {
  expect(reducer({
    genreFilter: `test filter`,
    films,
  }, {
    type: ActionType.SELECT_GENRE_FILTER,
    payload: `new filter`,
  })).toEqual({
    genreFilter: `new filter`,
    films,
  });
});

it(`Reducer should set current films by a given value`, () => {
  expect(reducer({
    genreFilter: `test filter`,
    filmsByGenre: []
  }, {
    type: ActionType.SELECT_FILMS_BY_GENRE,
    payload: filterFilmsByGenre(`test filter`, films),
  })).toEqual({
    genreFilter: `test filter`,
    filmsByGenre: filterFilmsByGenre(`test filter`, films)
  });

  expect(reducer({
    genreFilter: `test1`,
    filmsByGenre: films
  }, {
    type: ActionType.SELECT_FILMS_BY_GENRE,
    payload: [`test1`, `test1`],
  })).toEqual({
    genreFilter: `test1`,
    filmsByGenre: [`test1`, `test1`]
  });
});

it(`Filter should return a correct list`, () => {
  expect(filterFilmsByGenre(`unknown`, films)).toEqual([]);
  expect(filterFilmsByGenre(`test1`, films)[0]).toEqual(films[0]);
  expect(filterFilmsByGenre(`test2`, films)[0]).toEqual(films[1]);
  expect(filterFilmsByGenre(`test3`, films)[0]).toEqual(films[2]);
});
