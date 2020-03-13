import * as React from "react";
import * as renderer from "react-test-renderer";
import {oneOfType, arrayOf, node} from "prop-types";
import withActiveCard from './with-active-card';

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

const MockComponentWrapped = withActiveCard(MockComponent);

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
