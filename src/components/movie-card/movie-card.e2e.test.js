import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MovieCard} from './movie-card';

Enzyme.configure({
  adapter: new Adapter()
});

const movieData = {
  name: `test`,
  img: `img/test.jsp`
};

describe(`MovieCard`, () => {
  it(`Should mouse over on card`, () => {
    const onMouseOver = jest.fn();
    const {name, img} = movieData;
    const movieCard = shallow(
        <MovieCard name={name} img={img} onMouseOver={onMouseOver}/>
    );

    movieCard.props().onMouseEnter();
    expect(onMouseOver.mock.calls[0][0]).toBe(`test`);
  });

  it(`Should card be clicked`, () => {
    const onClick = jest.fn();
    const e = {preventDefault: jest.fn()};
    const movieCard = shallow(
        <MovieCard onOpenCard={onClick}/>
    );

    movieCard.props().onClick(e);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
