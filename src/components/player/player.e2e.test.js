import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Player from './player';


Enzyme.configure({
  adapter: new Adapter()
});

it(`No active player shouldn't be rendered`, () => {
  const main = shallow(
      <Player/>
  );

  expect(main.get(0)).toBeFalsy();
});

it(`Active player should be rendered`, () => {
  const main = shallow(
      <Player active/>
  );

  expect(main.get(0)).not.toBeFalsy();
});

