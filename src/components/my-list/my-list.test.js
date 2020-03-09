import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {MyList} from "./my-list.jsx";

const props = {
  favorites: [
    {
      id: 1,
      name: `test`
    }
  ],
  loadFavorites: () => {}
};

it(`MyList renders correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <MyList {...props} />
      </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
