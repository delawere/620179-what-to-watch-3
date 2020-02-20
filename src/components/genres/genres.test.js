import React from 'react';
import renderer from 'react-test-renderer';
import Genres from './genres';

const genresList = [
  `test1`,
  `test2`
];

const selectedGenre = `test1`;

it(`Genres renders correctly`, () => {
  const tree = renderer
    .create(
        <Genres selectedGenre={selectedGenre} genresList={genresList}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
