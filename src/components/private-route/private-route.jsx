import React from "react";
import {bool, string, func} from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {LOGIN} from '../../router/paths.js';
import {getIsAuth} from "../../reducer/user/selectors.js";

const PrivateRoute = ({render, path, exact, isAuth}) => (
  <Route
    path={path}
    exact={exact}
    render={() => {
      return (
        isAuth
          ? render()
          : <Redirect to={LOGIN} />
      );
    }}
  />
);


PrivateRoute.propTypes = {
  isAuth: bool.isRequired,
  exact: bool.isRequired,
  path: string.isRequired,
  render: func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: getIsAuth(state),
});

export default connect(mapStateToProps)(PrivateRoute);
