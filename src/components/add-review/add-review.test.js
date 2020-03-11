import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter} from "react-router-dom";
import NameSpace from "../../reducer/name-space.js";
import {AddReview} from "./add-review.jsx";

const mockStore = configureStore([]);

const props = {
  comment: `test`,
  rating: 1,
  match: {
    params: {
      id: 1
    },
    path: ``,
    url: ``,
  }
};

it(`AddReview renders correctly`, () => {
  const store = mockStore({
    [NameSpace.FILMS]: {
      error: ``,
      loading: false,
      films: [
        {
          id: 1,
          name: `test`
        },
        {
          id: 2,
          name: `test`
        },
        {
          id: 3,
          name: `test`
        }
      ],
    },
    [NameSpace.USER]: {
      user: {
        id: 1,
        email: `test@email.com`,
        name: `test user`,
        avatarUrl: `avatar`
      }
    },
  });

  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <AddReview {...props} />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
