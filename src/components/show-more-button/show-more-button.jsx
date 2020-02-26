import React, {memo} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';
import {func, bool} from 'prop-types';

const ShowMoreButton = ({visible, showMoreCards}) => {
  if (!visible) {
    return null;
  }

  return (
    <button className="catalog__button" type="button" onClick={showMoreCards}>
      Show more
    </button>
  );
};

ShowMoreButton.propTypes = {
  visible: bool,
  showMoreCards: func
};

const mapStateToProps = ({shownCardsNumber, filmsByGenre}) => ({
  visible: shownCardsNumber <= filmsByGenre.length
});

const mapDispatchToProps = (dispatch) => ({
  showMoreCards: () => {
    dispatch(ActionCreator.showMoreCards());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(ShowMoreButton));
