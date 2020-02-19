import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';
import {MemoryRouter} from 'react-router';

const movieData = {
  name: `test`,
  img: `img/test.jpg`
};

it(`MovieCard renders correctly`, () => {
  const {name, img} = movieData;
  const tree = renderer
    .create(
        <MemoryRouter initialEntries={[`/test`]} >
          <MovieCard name={name} img={img}/>
        </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
