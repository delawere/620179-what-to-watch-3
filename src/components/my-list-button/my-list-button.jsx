import React, {memo} from "react";
import {bool, func} from "prop-types";

const MyListButton = ({isFavorite, isAuth, onClick}) => {
  const renderIcon = () => {
    if (isFavorite) {
      return (
        <svg viewBox="0 0 18 14" width="18" height="14" onClick={onClick}>
          <use xlinkHref="#in-list"></use>
        </svg>
      );
    } else {
      return (
        <svg viewBox="0 0 19 20" width="19" height="20" onClick={onClick}>
          <use xlinkHref="#add"></use>
        </svg>
      );
    }
  };

  if (!isAuth) {
    return null;
  }

  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={onClick}
    >
      {renderIcon()}
      <span>My list</span>
    </button>
  );
};

MyListButton.propTypes = {
  isFavorite: bool,
  isAuth: bool,
  onClick: func
};

export default memo(MyListButton);
