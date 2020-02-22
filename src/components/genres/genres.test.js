import React from "react";
import renderer from "react-test-renderer";
import {Genres} from "./genres.jsx";

const genres = [`genre1`, `genre2`, `genre3`];
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
const genreFilter = `test1`;

it(`Genres renders correctly`, () => {
  const tree = renderer
    .create(
        <Genres
          genres={genres}
          genreFilter={genreFilter}
          films={films} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
