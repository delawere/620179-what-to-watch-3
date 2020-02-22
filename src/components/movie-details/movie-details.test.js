import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {MovieDetails} from './movie-details';
import {MemoryRouter} from 'react-router';

const mockStore = configureStore([]);

const cardData = {
  name: `test`,
  img: `img/test.jpg`
};

const films = [
  {name: `test1`, img: `test1.img`, genre: `test1Genre`},
  {name: `test2`, img: `test2.img`, genre: `test2Genre`},
  {name: `test3`, img: `test3.img`, genre: `test3Genre`},
];

const match = {
  path: `testPath`,
  url: `testURL`
};

it(`MovieDetails renders correctly`, () => {
  const store = mockStore({
    genres: [`genre1`, `genre2`],
    genreFilter: `All genres`,
    filmsByGenre: films,
    films
  });

  const tree = renderer
    .create(
        <MemoryRouter initialEntries={[`/test`]} >
          <Provider store={store}>
            <MovieDetails cardData={cardData} films={films} match={match}/>
          </Provider>
        </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
