import * as React from "react";
import * as renderer from "react-test-renderer";
import {func, oneOfType, shape, object} from 'prop-types';
import withProgress from './with-progress';

interface Props {
  forwardedRef?: React.RefObject<HTMLVideoElement>;
}

const MockComponent = ({forwardedRef}: Props) => <video ref={forwardedRef}/>;

const MockComponentWithRef = React.forwardRef((props, ref: React.RefObject<HTMLVideoElement>) => {
  return <MockComponent {...props} forwardedRef={ref} />;
});

MockComponentWithRef.displayName = `test`;

MockComponent.propTypes = {
  forwardedRef: oneOfType([func, shape({current: object})]),
};

const MockComponentWrapped = withProgress(MockComponentWithRef);

it(`withProgress renders correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped setActivePlayer={() => void 0}/>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
