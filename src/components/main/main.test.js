import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import {BrowserRouter as Router} from 'react-router-dom';

const promoData = {
  name: `promoName`,
  genre: `promoGenre`,
  releaseDate: 0,
};

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

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <Main promoData={promoData} films={films}/>
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
