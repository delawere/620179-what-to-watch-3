import * as React from "react"
import * as renderer from "react-test-renderer";
import Comment from './comment.jsx';

it(`Comment renders correctly`, () => {
  const tree = renderer
    .create(
        <Comment date={`12.12.2011`}/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});