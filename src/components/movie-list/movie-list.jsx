import React, {PureComponent} from "react";
import {arrayOf, exact, string, func} from "prop-types";
import {connect} from "react-redux";
import MovieCard from "../movie-card/movie-card.jsx";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
      mouseOverTimer: null
    };

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

  _handleCardMouseLeave() {
    const {mouseOverTimer} = this.state;

    clearTimeout(mouseOverTimer);

    this.setState({
      activeCard: null
    });
  }

  render() {
    const {filmsByGenre, onOpenCard} = this.props;
    const {activeCard} = this.state;

    return (
      <div className="catalog__movies-list">
        {filmsByGenre.map(({name, img, preview, genre}) => (
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
  filmsByGenre: arrayOf(
      exact({
        name: string,
        img: string,
        preview: string,
        genre: string
      })
  ),
  filter: string,
  onOpenCard: func
};

const mapStateToProps = ({filmsByGenre}) => ({
  filmsByGenre
});

export {MovieList};
export default connect(mapStateToProps)(MovieList);
