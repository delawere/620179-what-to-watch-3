import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter as Router} from 'react-router-dom';

const mockStore = configureStore([]);

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
  const store = mockStore({
    genres: [`genre1`, `genre2`],
    genreFilter: `All genres`,
    filmsByGenre: films,
    films
  });

  const tree = renderer
    .create(
        <Router>
          <Provider store={store}>
            <Main promoData={promoData}/>
          </Provider>
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
