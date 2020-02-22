
import reducer, {ActionType} from "./reducer.js";

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

const genres = [
  `genre1`,
  `genre2`,
  `genre3`
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
    filmsByGenre: films
  }, {
    type: ActionType.SELECT_FILMS_BY_GENRE,
    payload: films
  })).toEqual({
    filmsByGenre: films
  });

  expect(reducer({
    filmsByGenre: films
  }, {
    type: ActionType.SELECT_FILMS_BY_GENRE,
    payload: [`test1`, `test1`],
  })).toEqual({
    filmsByGenre: [`test1`, `test1`]
  });
});

it(`Reducer should set genres by a given value`, () => {
  expect(reducer({
    genres
  }, {
    type: ActionType.SET_GENRES,
    payload: genres,
  })).toEqual({
    genres
  });

  expect(reducer({
    genres
  }, {
    type: ActionType.SET_GENRES,
    payload: [`test1`, `test1`],
  })).toEqual({
    genres: [`test1`, `test1`]
  });
});

it(`Reducer should set films by a given value`, () => {
  expect(reducer({
    films
  }, {
    type: ActionType.SET_FIMLS,
    payload: films,
  })).toEqual({
    films
  });

  expect(reducer({
    films
  }, {
    type: ActionType.SET_FIMLS,
    payload: [`test1`, `test1`],
  })).toEqual({
    films: [`test1`, `test1`]
  });
});
