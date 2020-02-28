import React, {memo, forwardRef} from 'react';
import {func, string, oneOfType, shape, object, number, bool} from 'prop-types';

const windowModeStyles = {
  width: `900px`,
  height: `500px`,
  top: `calc(50vh - 250px)`,
  left: `calc(50% - 450px)`
};

const fullScreenStyles = {
  position: `fixed`,
  width: `100%`,
  height: `100vh`,
  top: `0`,
  left: `0`
};

const renderedPlayIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="#d9cd8d">
    <path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/>
  </svg>
);

const renderedPauseIcon = (
  <svg viewBox="0 0 19 19" width="19" height="19">
    <use xlinkHref="#pause"></use>
  </svg>
);


const VideoPlayer = ({mode, elapsedTime, onClosePlayer, onClickPlayButton, onChangeMode, progress, paused, forwardedRef}) => {
  const getStyles = () => {
    const initialStyles = {
      zIndex: `4`,
      position: `absolute`
    };

    if (mode === `window`) {
      return Object.assign(initialStyles, windowModeStyles);
    }

    if (mode === `full`) {
      return Object.assign(initialStyles, fullScreenStyles);
    }

    return initialStyles;
  };

  return (
    <div className="player" style={getStyles()}>
      <video src="https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm"
        className="player__video"
        poster="img/player-poster.jpg"
        autoPlay
        ref={forwardedRef}></video>

      <button type="button" className="player__exit" onClick={onClosePlayer}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{elapsedTime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onClickPlayButton}>
            {!paused ? renderedPauseIcon : renderedPlayIcon}
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={onChangeMode}>
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

VideoPlayer.defaultProps = {
  mode: `window`
};

VideoPlayer.propTypes = {
  onClosePlayer: func,
  onClickPlayButton: func,
  elapsedTime: string,
  mode: string,
  onChangeMode: func,
  progress: number,
  paused: bool,
  forwardedRef: oneOfType([func, shape({current: object})]),
};


const MemoizedVideoPlayer = memo(VideoPlayer);

const MemoizedVideoPlayerWithRef = forwardRef((props, ref) => {
  return <MemoizedVideoPlayer {...props} forwardedRef={ref} />;
});

MemoizedVideoPlayerWithRef.displayName = `VidePlayer`;

export default MemoizedVideoPlayerWithRef;


