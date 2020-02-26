import React from "react";
import renderer from "react-test-renderer";
import GenresItem from "./genres-item.jsx";

it(`GenresItem renders correctly`, () => {
  const tree = renderer
    .create(
        <GenresItem
          genre={`test`}
          activeClass={`activeItem`} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
