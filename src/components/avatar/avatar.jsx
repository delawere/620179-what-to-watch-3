import React, {memo} from 'react';
import {bool, string, func} from 'prop-types';
import {Link} from 'react-router-dom';

const ORIGIN = `https://htmlacademy-react-3.appspot.com`;

const Avatar = ({onClick, isAuth, avatarUrl}) => {

  if (isAuth) {
    return (
      <div className="user-block__avatar" onClick={onClick}>
        <img src={`${ORIGIN}${avatarUrl}`} alt="User avatar" width="63" height="63" />
      </div>
    );
  } else {
    return (
      <Link to="/login" className="sign-in__link">Sign In</Link>
    );
  }
};

Avatar.propTypes = {
  isAuth: bool,
  onClick: func,
  avatarUrl: string
};

export default memo(Avatar);
