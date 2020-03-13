import * as React from "react"
import * as renderer from "react-test-renderer";
import Player from './player';

const film = [
  {
    src: `video.mp4`,
    name: `name1`,
    img: `img/name1.jpg`,
  }
];

it(`Player renders correctly`, () => {
  const tree = renderer
    .create(
        <Player {...film} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
