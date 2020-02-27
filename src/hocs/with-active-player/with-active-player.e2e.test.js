import React from 'react';
import {oneOfType, arrayOf, node} from 'prop-types';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActivePlayer from './with-active-player.jsx';

configure({
  adapter: new Adapter()
});

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

const MockComponentWrapped = withActivePlayer(MockComponent);

it(`State should updated from props`, () => {
  const activePlayer = mount(<MockComponentWrapped active/>);
  const activePlayerInstance = activePlayer.instance();
  activePlayerInstance.componentDidUpdate({active: false});
  expect(activePlayer.state(`active`)).toBe(true);

  const nonActivePlayer = mount(<MockComponentWrapped active={false}/>);
  const nonActivePlayerInstance = nonActivePlayer.instance();
  nonActivePlayerInstance.componentDidUpdate({active: true});
  expect(nonActivePlayer.state(`active`)).toBe(false);
});
