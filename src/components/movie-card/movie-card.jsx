import React from "react";
import {string, func, shape, bool} from "prop-types";
import {Link} from "react-router-dom";
import Player from "../player/player.jsx";

const MovieCard = ({
  name,
  img,
  preview,
  genre,
  onMouseEnter,
  onMouseLeave,
  onOpenCard,
  active
}) => {
  const onMouseEnterWrapper = () => {
    onMouseEnter(name);
  };

  const onOpenCardWrapper = (e) => {
    e.preventDefault();

    onOpenCard({
      name,
      img,
      genre
    });
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
      }}
    >
      <div className="small-movie-card__image">
        <img src={img} alt={name} width="280" height="175" />
      </div>
      <h3
        className="small-movie-card__title"
        style={{
          width: `100%`,
          height: `100%`
        }}
      >
        <Link
          to="/dev-component"
          className="small-movie-card__link"
          style={{
            width: `100%`,
            height: `100%`,
            display: `flex`,
            alignItems: `flex-end`
          }}
        >
          {name}
        </Link>
      </h3>
      <Player active={active} src={preview} name={name} img={img} />
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
  genre: string,
  onMouseEnter: func,
  onMouseLeave: func,
  onOpenCard: func,
  active: bool
};

export default MovieCard;
