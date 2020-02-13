import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from './movie-details';

const cardData = {
  name: `test`,
  img: `img/test.jpg`
};

it(`MovieDetails renders correctly`, () => {
  const tree = renderer
    .create(<MovieDetails cardData={cardData}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
