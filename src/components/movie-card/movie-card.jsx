import React from 'react';
import {string, func, shape, bool} from 'prop-types';
import {withRouter} from 'react-router-dom';
import Player from '../player/player.jsx';

const MovieCard = ({history, name, img, preview, onMouseEnter, onMouseLeave, onOpenCard, active}) => {
  const onMouseEnterWrapper = () => {
    onMouseEnter(name);
  };

  const onOpenCardWrapper = (e) => {
    e.preventDefault();

    onOpenCard({
      name,
      img
    }, () => history.push(`/dev-component`));
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      key={name}
      onClick={onOpenCardWrapper}
      onMouseEnter={onMouseEnterWrapper}
      onMouseLeave={onMouseLeave}
      style={{
        position: `relative`
      }}>
      <div className="small-movie-card__image" >
        <img src={img} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
      <Player active={active} src={preview} name={name} img={img}/>
    </article>
  );
};

MovieCard.propTypes = {
  history: shape({
    history: func
  }),
  name: string,
  img: string,
  preview: string,
  onMouseEnter: func,
  onMouseLeave: func,
  onOpenCard: func,
  active: bool,
};

export {MovieCard};
export default withRouter(MovieCard);

