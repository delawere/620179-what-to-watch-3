import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Player from './player';


Enzyme.configure({
  adapter: new Adapter()
});

it(`State should updated from props`, () => {
  const activePlayer = shallow(<Player active/>);
  const activePlayerInstance = activePlayer.instance();
  activePlayerInstance.componentDidUpdate({active: false});
  expect(activePlayer.state(`active`)).toBe(true);

  const nonActivePlayer = shallow(<Player active={false}/>);
  const nonActivePlayerInstance = nonActivePlayer.instance();
  nonActivePlayerInstance.componentDidUpdate({active: true});
  expect(nonActivePlayer.state(`active`)).toBe(false);
});
