import * as React from "react"
import * as renderer from "react-test-renderer";
import Logo from './logo.jsx';

it(`Logo renders correctly`, () => {
  const tree = renderer
    .create(
        <Logo />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
