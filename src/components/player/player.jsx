import React from 'react';
import {string, bool} from 'prop-types';

const Player = ({active, src, img, name}) => {
  if (!active) {
    return null;
  }
  return (
    <div className="player" style={{
      width: `100%`,
      height: `100%`,
      position: `absolute`,
      zIndex: `10`,
    }}>
      <video src={src} className="player__video" poster={img} autoPlay muted></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  active: bool,
  src: string,
  img: string,
  name: string
};

export default Player;


