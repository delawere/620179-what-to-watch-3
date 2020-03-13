import * as React from "react"
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {App} from './app';

const mockStore = configureStore([]);

const films = [
  {
    id: 1,
    name: `name1`,
    img: `img/name1.jpg`,
    genre: `test1`,
    preview: `test1`,
  },
  {
    id: 2,
    name: `name2`,
    img: `img/name2.jpg`,
    genre: `test2`,
    preview: `test2`,
  },
  {
    id: 3,
    name: `name3`,
    img: `img/name3.jpg`,
    genre: `test3`,
    preview: `test4`,
  },
];

it(`App renders correctly`, () => {
  const store = mockStore({
    [NameSpace.GENRES]: {
      genres: [`genre1`, `genre2`],
      genreFilter: `All genres`
    },
    [NameSpace.FILMS]: {
      films
    },
    [NameSpace.PROMO]: {
      promo: films[0]
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      user: {
        id: 1,
        email: `test@email.com`,
        name: `test user`,
        avatarUrl: `avatar`
      }
    },
    [NameSpace.FAVORITES]: {
      favorites: films
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <App filteredFilms={films}/>
          </BrowserRouter>
        </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});