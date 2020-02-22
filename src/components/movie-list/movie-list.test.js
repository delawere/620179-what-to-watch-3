import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import {MovieList} from './movie-list';
import {BrowserRouter as Router} from 'react-router-dom';
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

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
  const store = mockStore({
    filmsByGenre: films,
  });

  const {filmsByGenre} = store.getState();

  const tree = renderer
    .create(
        <Router>
          <Provider store={store}>
            <MovieList filmsByGenre={filmsByGenre}/>
          </Provider>
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
