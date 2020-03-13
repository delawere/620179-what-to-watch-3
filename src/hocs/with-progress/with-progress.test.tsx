import * as React from "react"
import * as renderer from "react-test-renderer";
import {func, oneOfType, shape, object} from 'prop-types';
import withProgress from './with-progress.jsx';

const MockComponent = () => <video />;

const MockComponentWithRef = React.forwardRef((props, ref) => {
  return <MockComponent {...props} forwardedRef={ref} />;
});

MockComponentWithRef.displayName = `test`;

MockComponent.propTypes = {
  forwardedRef: oneOfType([func, shape({current: object})]),
};

const MockComponentWrapped = withProgress(MockComponentWithRef);

it(`withProgress renders correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped setActivePlayer={() => {}}/>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
