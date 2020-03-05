import React from "react";
import renderer from "react-test-renderer";
import {oneOfType, arrayOf, node} from "prop-types";
import withCheckAuth from './with-check-auth.jsx';

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
  const tree = renderer.create((
    <MockComponentWrapped/>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
