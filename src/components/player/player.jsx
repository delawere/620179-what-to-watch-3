import React, {memo} from 'react';
import {string, bool} from 'prop-types';

const Player = ({active, src, img}) => {
  const renderePlayer = (
    <div className="player">
      <video src={src} className="player__video" poster={img} autoPlay muted></video>
    </div>
  );

  return active ? renderePlayer : null;
};

Player.propTypes = {
  active: bool,
  src: string,
  img: string,
};

export default memo(Player);


