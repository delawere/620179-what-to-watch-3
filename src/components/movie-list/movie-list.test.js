import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './movie-list';
import {BrowserRouter as Router} from 'react-router-dom';

const films = [
  {
    name: `name1`,
    img: `img/name1.jpg`,
  },
  {
    name: `name2`,
    img: `img/name2.jpg`,
  },
  {
    name: `name3`,
    img: `img/name3.jpg`,
  },
];

it(`MovieList renders correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <MovieList films={films} />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
