import React, {memo} from "react";
import {string, func, shape, bool, number} from "prop-types";
import {Link} from "react-router-dom";
import Player from "../player/player.jsx";

const SHOW_PREVIEW_DELAY = 1000;
const LINK_STYLES = {
  width: `100%`,
  height: `100%`,
  display: `flex`,
  alignItems: `flex-end`
};
const TITLE_STYLES = {
  width: `100%`,
  height: `100%`
};


const MovieCard = ({
  id,
  name,
  genre,
  previewImage,
  videoLink,
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
      setActiveItem({genre, previewImage, name});
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
      id,
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
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3
        className="small-movie-card__title"
        style={TITLE_STYLES}
      >
        <Link
          to={`/films/${id}`}
          className="small-movie-card__link"
          style={LINK_STYLES}
        >
          {name}
        </Link>
      </h3>
      <Player active={active} src={videoLink} name={name} img={previewImage} />
    </article>
  );
};

MovieCard.propTypes = {
  history: shape({
    history: func
  }),
  id: number,
  name: string,
  genre: string,
  previewImage: string,
  videoLink: string,
  setActiveItem: func,
  removeActiveItem: func,
  setTimer: func,
  getTimer: func,
  removeTimer: func,
  onOpenCard: func,
  active: bool,
};

export default memo(MovieCard);
