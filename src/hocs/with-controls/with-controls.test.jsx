import React, {forwardRef} from "react";
import renderer from "react-test-renderer";
import {func, oneOfType, shape, object} from 'prop-types';
import withControls from './with-controls.jsx';

const MockComponent = () => <video />;

const MockComponentWithRef = forwardRef((props, ref) => {
  return <MockComponent {...props} forwardedRef={ref} />;
});

MockComponentWithRef.displayName = `test`;

MockComponent.propTypes = {
  forwardedRef: oneOfType([func, shape({current: object})]),
};

const MockComponentWrapped = withControls(MockComponentWithRef);

it(`withControls renders correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped setActivePlayer={() => {}}/>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
