import React from "react";
import renderer from "react-test-renderer";
import {oneOfType, arrayOf, node} from "prop-types";
import withActiveItem from './with-active-item.jsx';

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

const MockComponentWrapped = withActiveItem(MockComponent);

it(`withActiveItem renders correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped/>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
