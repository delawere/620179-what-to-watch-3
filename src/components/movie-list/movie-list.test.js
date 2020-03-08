import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import configureStore from "redux-mock-store";
import {MovieList} from './movie-list';

const mockStore = configureStore([]);

const films = [
  {
    id: 1,
    name: `name1`,
    img: `img/name1.jpg`,
  },
  {
    id: 2,
    name: `name2`,
    img: `img/name2.jpg`,
  },
  {
    id: 3,
    name: `name3`,
    img: `img/name3.jpg`,
  },
];

const activeItem = {
  name: `test`
};

it(`MovieList renders correctly`, () => {
  const store = mockStore({
    films,
    filteredFilms: films
  });

  const {filteredFilms} = store.getState();

  const tree = renderer
    .create(
        <Router>
          <Provider store={store}>
            <MovieList filteredFilms={filteredFilms} activeItem={activeItem}/>
          </Provider>
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
