import React from 'react';
import {string, func, shape} from 'prop-types';
import {withRouter} from 'react-router-dom';

const MovieCard = ({history, name, img, onMouseOver, onOpenCard}) => {
  const onMouseOverWrapper = () => {
    onMouseOver(name);
  };

  const onOpenCardWrapper = (e) => {
    e.preventDefault();

    onOpenCard({
      name,
      img
    }, () => history.push(`/dev-component`));
  };

  return (
    <article className="small-movie-card catalog__movies-card" key={name} onMouseOver={onMouseOverWrapper} onClick={onOpenCardWrapper}>
      <div className="small-movie-card__image">
        <img src={img} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  history: shape({
    history: func
  }),
  name: string,
  img: string,
  onMouseOver: func,
  onOpenCard: func
};

export {MovieCard};
export default withRouter(MovieCard);

