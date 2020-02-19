import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from './movie-details';

const cardData = {
  name: `test`,
  img: `img/test.jpg`
};

const films = [
  {name: `test1`, img: `test1.img`, genre: `test1Genre`},
  {name: `test2`, img: `test2.img`, genre: `test2Genre`},
  {name: `test3`, img: `test3.img`, genre: `test3Genre`},
];

it(`MovieDetails renders correctly`, () => {
  const tree = renderer
    .create(<MovieDetails cardData={cardData} films={films}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
