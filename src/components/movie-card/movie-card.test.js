import React from 'react';
import renderer from 'react-test-renderer';
import {MovieCard} from './movie-card';

const movieData = {
  name: `test`,
  img: `img/test.jpg`
};

it(`MovieCard renders correctly`, () => {
  const {name, img} = movieData;
  const tree = renderer
    .create(
        <MovieCard name={name} img={img}/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
