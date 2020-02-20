import React from 'react';
import renderer from 'react-test-renderer';
import {Tabs} from './tabs';

const match = {
  params: `test`
};

it(`Tabs renders correctly`, () => {
  const tree = renderer
    .create(<Tabs match={match}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
