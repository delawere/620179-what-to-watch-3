import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

const promoData = {
  name: `promoName`,
  genre: `promoGenre`,
  releaseDate: 0,
};

const moviesList = [
  {
    name: `name1`,
    img: `img/name1.jpg`,
  },
  {
    name: `name2`,
    img: `img/name2.jpg`,
  },
  {
    name: `name3`,
    img: `img/name3.jpg`,
  },
];

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should title be clicked`, () => {
  const onTitleClick = jest.fn();

  const main = shallow(
      <Main promoData={promoData} moviesList={moviesList} onTitleClick={onTitleClick} />
  );

  const titles = main.find(`.small-movie-card__title`);
  const titlesLength = titles.length;

  titles.forEach((title) => title.props().onClick());

  expect(onTitleClick).toHaveBeenCalledTimes(titlesLength);
});
