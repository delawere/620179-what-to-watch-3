import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card';

Enzyme.configure({
  adapter: new Adapter()
});

const movieData = {
  name: `test`,
};

jest.useFakeTimers();

describe(`MovieCard`, () => {
  it(`Should mouse enter on card`, () => {
    const setTimer = jest.fn();
    const {name, img} = movieData;
    const movieCard = shallow(
        <MovieCard name={name} img={img} setTimer={setTimer}/>
    );
    movieCard.props().onMouseEnter();

    expect(setTimer).toHaveBeenCalledTimes(1);


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
