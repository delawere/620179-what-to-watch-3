import * as React from "react"
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {Comments} from './comments.jsx';

const mockStore = configureStore([]);

it(`Comments renders correctly`, () => {
  const store = mockStore({
    [NameSpace.FILMS]: {
      comments: [{
        comment: `test1`,
        user: `test user`,
        id: 1,
        date: `12.12.2011`
      },
      {
        comment: `test2`,
        user: `test user`,
        id: 2,
        date: `12.12.2011`
      }]
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Comments match={{
              params: {
                id: 1
              },
              path: `test path`,
              url: `test url`
            }} loadComments={() => {}}/>
          </BrowserRouter>
        </Provider>

    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
