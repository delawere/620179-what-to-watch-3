import * as React from 'react';
import {connect} from 'react-redux';
import {FilmsType} from '../../types';
import {ActionCreator} from '../../reducer/films/films.js';
import {getShownCardsNumber} from '../../reducer/films/selectors';

interface Props {
  shownCardsNumber: number;
  onShowMoreCards: () => void;
  filteredFilms: FilmsType;
}

const ShowMoreButton = ({shownCardsNumber, onShowMoreCards, filteredFilms}: Props) => {
  const visible = shownCardsNumber <= filteredFilms.length;

  if (!visible) {
    return null;
  }

  return (
    <button className="catalog__button" type="button" onClick={onShowMoreCards}>
      Show more
    </button>
  );
};

const mapStateToProps = (state) => ({
  shownCardsNumber: getShownCardsNumber(state)
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreCards: () => {
    dispatch(ActionCreator.showMoreCards());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ShowMoreButton));
