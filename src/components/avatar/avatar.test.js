import React from "react";
import renderer from "react-test-renderer";
import Avatar from "./avatar.jsx";

const props = {
  isAuth: true,
  avatarUrl: `testURL`
};

it(`Avatar renders correctly`, () => {
  const tree = renderer
    .create(
        <Avatar {...props} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
