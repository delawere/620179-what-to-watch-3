import React from 'react';
import renderer from 'react-test-renderer';
import {VideoPlayer} from './video-player.jsx';

it(`VideoPlayer renders correctly`, () => {
  const tree = renderer
    .create(<VideoPlayer mode='window' elapsedTime='00:00:00' match={{
      params: {
        id: 1
      },
      path: ``,
      url: ``,
    }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
