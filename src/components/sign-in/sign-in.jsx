import React, {memo} from 'react';
import {func, string} from 'prop-types';
import {connect} from "react-redux";
import {Operation as UserOperation} from "../../reducer/user/user.js";

const SignIn = ({onSubmit, email, password, onChangeEmail, onChangePassword}) => {
  const wrapperOnSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      email,
      password
    });
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={wrapperOnSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"

                name="user-email"
                id="user-email"
                onChange={onChangeEmail}
                value={email}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email adress</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                onChange={onChangePassword}
                value={password}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

SignIn.propTypes = {
  onSubmit: func,
  email: string,
  password: string,
  onChangeEmail: func,
  onChangePassword: func
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(UserOperation.login(authData));
  },
});

const WrapperSignIn = connect(null, mapDispatchToProps)(SignIn);

export {SignIn};
export default memo(WrapperSignIn);
