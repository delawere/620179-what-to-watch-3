import React, {PureComponent} from 'react';
import {arrayOf, exact, string, func} from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
      mouseOverTimer: null

    };

    this._handleCardMouseOver = this._handleCardMouseOver.bind(this);
    this._handleCardMouseOut = this._handleCardMouseOut.bind(this);
  }

  _handleCardMouseOver(cardName) {
    const mouseOverTimer = setTimeout(() => {
      this.setState({
        activeCard: cardName
      });
    }, 1000);

    this.setState({
      mouseOverTimer
    });

  }

  _handleCardMouseOut() {
    const {mouseOverTimer} = this.state;

    clearTimeout(mouseOverTimer);

    this.setState({
      activeCard: null
    });

  }


  render() {
    const {films, onOpenCard} = this.props;
    const {activeCard} = this.state;

    return (
      <div className="catalog__movies-list">
        {films.map(({name, img, preview}) => (
          <MovieCard
            key={name}
            name={name}
            img={img}
            preview={preview}
            onMouseOver={this._handleCardMouseOver}
            onMouseOut={this._handleCardMouseOut}
            onOpenCard={onOpenCard}
            active={name === activeCard}/>
        ))}
      </div>
    );
  }
}


MovieList.propTypes = {
  films: arrayOf(exact({
    name: string,
    img: string
  })),
  onOpenCard: func,
  onMouseOver: func
};

export default MovieList;
