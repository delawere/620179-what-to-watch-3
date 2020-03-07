import React from "react";
import renderer from "react-test-renderer";
import {oneOfType, arrayOf, node} from "prop-types";
import {Provider} from "react-redux";
import {AUTH} from '../../consts.js';
import {BrowserRouter} from "react-router-dom";
import withCheckAuth from './with-check-auth.jsx';
import NameSpace from "../../reducer/name-space.js";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node
  ]),
};

const MockComponentWrapped = withCheckAuth(MockComponent);

it(`withCheckAuth renders correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AUTH,
    }
  });

  const tree = renderer.create((
    <Provider store={store}>
      <BrowserRouter>
        <MockComponentWrapped/>
      </BrowserRouter>
    </Provider>

  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
