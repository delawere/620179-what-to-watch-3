import React from 'react';
import {string, func} from 'prop-types';

const MovieCard = ({name, img, onClick, onMouseOver, onOpenCard}) => {
  const onMouseOverWrapper = () => {
    onMouseOver(name);
  };

  const onOpenCardWrapper = () => {
    onOpenCard({
      name,
      img
    });
  };

  return (
    <article className="small-movie-card catalog__movies-card" key={name} onMouseOver={onMouseOverWrapper} onClick={onOpenCardWrapper}>
      <div className="small-movie-card__image">
        <img src={img} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title" onClick={onClick}>
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  name: string,
  img: string,
  onClick: func,
  onMouseOver: func,
  onOpenCard: func
};

export default MovieCard;

