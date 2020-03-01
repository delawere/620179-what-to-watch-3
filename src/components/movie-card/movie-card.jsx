import React, {memo} from "react";
import {string, func, shape, bool} from "prop-types";
import {Link} from "react-router-dom";
import Player from "../player/player.jsx";
import withPlayer from '../../hocs/with-player/with-player.jsx';

const PlayerWithActive = withPlayer(Player);
const SHOW_PREVIEW_DELAY = 1000;

const MovieCard = ({
  name,
  img,
  preview,
  genre,
  setActiveItem,
  removeActiveItem,
  setTimer,
  getTimer,
  removeTimer,
  onOpenCard,
  active
}) => {
  const onMouseEnter = () => {
    const mouseOverTimer = setTimeout(() => {
      setActiveItem({genre, img, name});
    }, SHOW_PREVIEW_DELAY);

    setTimer(mouseOverTimer);
  };

  const onMouseLeave = () => {
    const timerId = getTimer();
    removeTimer(timerId);

    removeActiveItem();
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
      onMouseEnter={onMouseEnter}
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
      <PlayerWithActive active={active} src={preview} name={name} img={img} />
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
  setActiveItem: func,
  removeActiveItem: func,
  setTimer: func,
  getTimer: func,
  removeTimer: func,
  onOpenCard: func,
  active: bool
};

export default memo(MovieCard);
