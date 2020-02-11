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
    const {films, onClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map(({name, img}) => (
          <MovieCard key={name} name={name} img={img} onClick={onClick} onMouseOver={this.handleCardMouseOver}/>
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
  onClick: func,
  onMouseOver: func
};

export default MovieList;
