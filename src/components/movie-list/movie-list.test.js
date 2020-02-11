import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './movie-list';

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
    .create(<MovieList films={films} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
