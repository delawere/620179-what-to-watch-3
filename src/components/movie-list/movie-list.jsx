import React, {PureComponent} from 'react';
import {arrayOf, exact, string, func} from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this.handleCardMouseOver = this.handleCardMouseOver.bind(this);
  }

  handleCardMouseOver(cardName) {
    this.setState({
      activeCard: cardName
    });
  }

  render() {
    const {films, onOpenCard} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map(({name, img}) => (
          <MovieCard key={name} name={name} img={img} onMouseOver={this.handleCardMouseOver} onOpenCard={onOpenCard}/>
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
