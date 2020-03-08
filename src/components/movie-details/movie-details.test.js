import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {MovieDetails} from './movie-details';
import {MemoryRouter} from 'react-router';
import NameSpace from "../../reducer/name-space.js";

const mockStore = configureStore([]);

const cardData = {
  name: `test`,
  img: `img/test.jpg`
};

const films = [
  {id: 1, name: `test1`, img: `test1.img`, genre: `test1Genre`},
  {id: 2, name: `test2`, img: `test2.img`, genre: `test2Genre`},
  {id: 3, name: `test3`, img: `test3.img`, genre: `test3Genre`},
];

const match = {
  path: `testPath`,
  url: `testURL`,
  params: {
    id: `1`
  }
};

it(`MovieDetails renders correctly`, () => {
  const store = mockStore({
    [NameSpace.GENRES]: {
      genres: [`genre1`, `genre2`],
      genreFilter: `All genres`
    },
    [NameSpace.FILMS]: {
      films
    },
  });

  const tree = renderer
    .create(
        <MemoryRouter initialEntries={[`/test`]} >
          <Provider store={store}>
            <MovieDetails
              cardData={cardData}
              films={films}
              match={match}
              filteredFilms={films}
              user={{avatarUrl: `test`}}/>
          </Provider>
        </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
