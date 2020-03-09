import React, {memo, forwardRef} from 'react';
import {func, string, oneOfType, shape, object, number, bool} from 'prop-types';
import {withRouter} from 'react-router-dom';
import {MatchType, FilmsType} from '../../types.js';

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

const VideoPlayer = ({match, films, elapsedTime, onClosePlayer, onClickPlayButton, onChangeMode, progress, paused, forwardedRef}) => {
  const {
    params: {id}
  } = match;
  const data = films.find(({id: movieId}) => movieId.toString() === id) || {};
  const {
    videoLink,
    previewImage
  } = data;
  return (
    <div className="player">
      <video src={videoLink}
        className="player__video"
        poster={previewImage}
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

VideoPlayer.propTypes = {
  match: MatchType,
  films: FilmsType,
  onClosePlayer: func,
  onClickPlayButton: func,
  elapsedTime: string,
  onChangeMode: func,
  progress: number,
  paused: bool,
  forwardedRef: oneOfType([func, shape({current: object})]),
};


const MemoizedVideoPlayer = memo(withRouter(VideoPlayer));

const MemoizedVideoPlayerWithRef = forwardRef((props, ref) => {
  return <MemoizedVideoPlayer {...props} forwardedRef={ref} />;
});

MemoizedVideoPlayerWithRef.displayName = `VideoPlayer`;

export default MemoizedVideoPlayerWithRef;


