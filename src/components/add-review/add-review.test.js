import React from "react";
import renderer from "react-test-renderer";
import {AddReview} from "./add-review.jsx";

const props = {
  id: 1,
  comment: `test`,
  rating: 1,
  error: `error`,
  loading: false
};

it(`AddReview renders correctly`, () => {
  const tree = renderer
    .create(
        <AddReview {...props} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
