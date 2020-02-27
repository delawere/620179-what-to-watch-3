import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import App from './app';

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
    genre: `test1`,
    preview: `test1`,
  },
  {
    name: `name2`,
    img: `img/name2.jpg`,
    genre: `test2`,
    preview: `test2`,
  },
  {
    name: `name3`,
    img: `img/name3.jpg`,
    genre: `test3`,
    preview: `test4`,
  },
];

it(`App renders correctly`, () => {
  const store = mockStore({
    genres: [`genre1`, `genre2`],
    genreFilter: `All genres`,
    films,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App promoData={promoData} films={films}/>
        </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
