import React, {memo} from 'react';
import {string, bool} from 'prop-types';

const Player = ({active, src, img}) => {
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
    </div>
  );
};

Player.propTypes = {
  active: bool,
  src: string,
  img: string,
};

export default memo(Player);


