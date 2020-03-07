import React, {memo} from 'react';
import {func, number} from 'prop-types';
import {connect} from 'react-redux';
import {FilmsType} from '../../types';
import {ActionCreator} from '../../reducer/films/films.js';
import {getShownCardsNumber} from '../../reducer/films/selectors';

const ShowMoreButton = ({shownCardsNumber, showMoreCards, filteredFilms}) => {
  const visible = shownCardsNumber <= filteredFilms.length;

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
  shownCardsNumber: number,
  showMoreCards: func,
  filteredFilms: FilmsType
};

const mapStateToProps = (state) => ({
  shownCardsNumber: getShownCardsNumber(state)
});

const mapDispatchToProps = (dispatch) => ({
  showMoreCards: () => {
    dispatch(ActionCreator.showMoreCards());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(ShowMoreButton));
