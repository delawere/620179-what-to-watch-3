import React, {PureComponent} from "react";
import {string, func, number} from "prop-types";
import {connect} from "react-redux";
import MovieCard from "../movie-card/movie-card.jsx";
import {FilmsType} from '../../types';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
      mouseOverTimer: null
    };

    this._clearTimer = this._clearTimer.bind(this);
    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);
  }

  _handleCardMouseEnter(cardName) {
    const showPreviewDelay = 1000;
    const mouseOverTimer = setTimeout(() => {
      this.setState({
        activeCard: cardName
      });
    }, showPreviewDelay);

    this.setState({
      mouseOverTimer
    });
  }

  _clearTimer() {
    const {mouseOverTimer} = this.state;

    clearTimeout(mouseOverTimer);

    this.setState({
      activeCard: null
    });
  }

  _handleCardMouseLeave() {
    this._clearTimer();
  }

  componentWillUnmount() {
    this._clearTimer();
  }

  render() {
    const {filmsByGenre, onOpenCard, shownCardsNumber} = this.props;
    const {activeCard} = this.state;
    const shownFilms = filmsByGenre.slice(0, shownCardsNumber);

    return (
      <div className="catalog__movies-list">
        {shownFilms.map(({name, img, preview, genre}) => (
          <MovieCard
            key={name}
            name={name}
            img={img}
            preview={preview}
            genre={genre}
            onMouseEnter={this._handleCardMouseEnter}
            onMouseLeave={this._handleCardMouseLeave}
            onOpenCard={onOpenCard}
            active={name === activeCard}
          />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  filmsByGenre: FilmsType,
  filter: string,
  onOpenCard: func,
  shownCardsNumber: number,
};

const mapStateToProps = ({filmsByGenre, shownCardsNumber}) => ({
  filmsByGenre,
  shownCardsNumber,
});

export {MovieList};
export default connect(mapStateToProps)(MovieList);
