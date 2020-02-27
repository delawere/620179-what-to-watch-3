import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import ShowMoreButton from "./show-more-button";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

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

const SHOWN_CARDS_NUMBER = 6;

it(`ShowMoreButton renders correctly`, () => {
  const store = mockStore({
    shownCardsNumber: SHOWN_CARDS_NUMBER,
    filteredFilms: films
  });


  const {filteredFilms} = store.getState();

  const tree = renderer
    .create(
        <Provider store={store}>
          <ShowMoreButton filteredFilms={filteredFilms}/>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
