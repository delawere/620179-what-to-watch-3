import React from "react";
import renderer from "react-test-renderer";
import MyListButton from "./my-list-button.jsx";

const props = {
  isFavorite: true,
  isAuth: true
};

it(`MyListButton renders correctly`, () => {
  const tree = renderer.create(<MyListButton {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});