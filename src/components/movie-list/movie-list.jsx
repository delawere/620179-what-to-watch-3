import React, {memo} from "react";
import {string, func, number} from "prop-types";
import {connect} from "react-redux";
import MovieCard from "../movie-card/movie-card.jsx";
import {FilmsType} from '../../types';


const MovieList = ({filmsByGenre, onOpenCard, shownCardsNumber, activeCard, setActiveCard, removeActiveCard}) => {
  const shownFilms = filmsByGenre.slice(0, shownCardsNumber);

  const handleCardMouseEnter = (cardName) => {
    setActiveCard(cardName);
  };

  const handleCardMouseLeave = () => {
    removeActiveCard();
  };

  return (
    <div className="catalog__movies-list">
      {shownFilms.map(({name, img, preview, genre}) => (
        <MovieCard
          key={name}
          name={name}
          img={img}
          preview={preview}
          genre={genre}
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
          onOpenCard={onOpenCard}
          active={name === activeCard}
        />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  activeCard: string,
  filmsByGenre: FilmsType,
  filter: string,
  onOpenCard: func,
  shownCardsNumber: number,
  setActiveCard: func,
  removeActiveCard: func,
};

const mapStateToProps = ({filmsByGenre, shownCardsNumber}) => ({
  filmsByGenre,
  shownCardsNumber,
});

export {MovieList};
export default connect(mapStateToProps)(memo(MovieList));
