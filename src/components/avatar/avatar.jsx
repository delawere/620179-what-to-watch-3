import React, {memo} from "react";
import {bool} from "prop-types";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {UserType, HistoryType} from '../../types.js';
import {getUser, getIsAuth} from "../../reducer/user/selectors";

const ORIGIN = `https://htmlacademy-react-3.appspot.com`;

const Avatar = ({history, isAuth, userData: {avatarUrl} = {}}) => {
  const handleClickAvatar = () => {
    history.push(`/mylist`);
  };
  if (isAuth) {
    return (
      <div className="user-block__avatar" onClick={handleClickAvatar}>
        <img
          src={`${ORIGIN}${avatarUrl}`}
          alt="User avatar"
          width="63"
          height="63"
        />
      </div>
    );
  } else {
    return (
      <Link to="/login" className="sign-in__link">
        Sign In
      </Link>
    );
  }
};

Avatar.propTypes = {
  userData: UserType,
  isAuth: bool,
  history: HistoryType
};

const mapStateToProps = (state) => ({
  userData: getUser(state),
  isAuth: getIsAuth(state)
});

export {Avatar};
export default connect(mapStateToProps)(memo(withRouter(Avatar)));
