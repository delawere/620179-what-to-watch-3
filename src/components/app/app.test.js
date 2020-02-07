import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const promoData = {
  name: `promoName`,
  genre: `promoGenre`,
  releaseDate: 0,
};

const moviesList = [
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

it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App promoData={promoData} moviesList={moviesList}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
