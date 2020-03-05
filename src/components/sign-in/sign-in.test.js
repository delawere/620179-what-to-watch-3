import React from 'react';
import renderer from 'react-test-renderer';
import {SignIn} from './sign-in';
import {Provider} from "react-redux";

const props = {
  email: `fakeemail@mail.com`,
  password: `123456`
};

it(`SignIn renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider>
          <SignIn {...props} />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
