import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Player from './player.jsx';

configure({
  adapter: new Adapter()
});

it(`Player should be rendered depends on prps`, () => {
  const activePlayer = mount(<Player active/>);
  const activePlayerInstance = activePlayer.instance();
  activePlayerInstance.componentDidUpdate({active: false});
  expect(activePlayer.state(`active`)).toBe(true);

  const nonActivePlayer = mount(<Player active={false}/>);
  const nonActivePlayerInstance = nonActivePlayer.instance();
  nonActivePlayerInstance.componentDidUpdate({active: true});
  expect(nonActivePlayer.state(`active`)).toBe(false);
});
