import React from "react";
import renderer from "react-test-renderer";
import {AddReview} from "./add-review.jsx";

it(`AddReview renders correctly`, () => {
  const tree = renderer
    .create(
        <AddReview
          loading={false}
          error={false}
          id={1}
          comment={`test`}
          rating={1} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
