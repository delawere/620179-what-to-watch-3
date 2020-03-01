import React, {PureComponent, createRef} from 'react';
import {func} from 'prop-types';

const secondsToHms = (seconds) => {
  seconds = Number(seconds);

  let h = Math.floor(seconds / 3600);
  let m = Math.floor(seconds % 3600 / 60);
  let s = Math.floor(seconds % 3600 % 60);

  return (`0` + h).slice(-2) + `:` + (`0` + m).slice(-2) + `:` + (`0` + s).slice(-2);
};


const withProgressBar = (Component) => {
  class WithProgressBar extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        progress: 0,
        elapsedTime: `00:00:00`,
        intervalId: null,
      };

      this.videoRef = createRef();

      this._handleClosePlayer = this._handleClosePlayer.bind(this);
      this.__handleOnClickPlayButton = this.__handleOnClickPlayButton.bind(this);
      this._handlePlayVideo = this._handlePlayVideo.bind(this);
      this._handlePauseVideo = this._handlePauseVideo.bind(this);
      this._setElapsedTime = this._setElapsedTime.bind(this);
      this._handleOnPlayingVideo = this._handleOnPlayingVideo.bind(this);
      this._handleChangeMode = this._handleChangeMode.bind(this);
      this._setProgress = this._setProgress.bind(this);
      this._getPlayerIsPaused = this._getPlayerIsPaused.bind(this);
    }

    _setElapsedTime(elapsedTime) {
      this.setState({
        elapsedTime
      });
    }

    _handleOnPlayingVideo() {
      const video = this.videoRef.current;
      const intervalId = setInterval(() => {
        const elapsedTime = Math.floor(video.duration - video.currentTime);

        this._setProgress();

        if (this.state.elapsedTime === elapsedTime) {
          return;
        }

        this._setElapsedTime(secondsToHms(elapsedTime));
      }, 60);

      this.setState({
        intervalId
      });
    }

    componentDidMount() {
      const video = this.videoRef.current;

      if (video) {
        video.addEventListener(`playing`, this._handleOnPlayingVideo);
      }
    }

    componentWillUnmount() {
      clearInterval(this.state.intervalId);
    }

    _handleClosePlayer() {
      clearInterval(this.state.intervalId);
      this.props.setActivePlayer(false);
      this.setState({
        intervalId: null
      });
    }

    __handleOnClickPlayButton() {
      const video = this.videoRef.current;

      if (video.paused) {
        this._handlePlayVideo();
      } else {
        this._handlePauseVideo();
      }
    }

    _handlePlayVideo() {
      this.videoRef.current.play();
    }

    _handlePauseVideo() {
      this.videoRef.current.pause();
      clearInterval(this.state.intervalId);
      this.setState({
        intervalId: null
      });
    }

    _handleChangeMode() {
      const video = this.videoRef.current;
      const rfs = video.requestFullscreen || video.webkitRequestFullScreen || video.mozRequestFullScreen || video.msRequestFullscreen;
      rfs.call(video);
    }

    _setProgress() {
      const video = this.videoRef.current;
      const currentTime = video.currentTime * 100 / video.duration;

      this.setState({
        progress: currentTime
      });
    }

    _getPlayerIsPaused() {
      const video = this.videoRef.current;

      if (video) {
        return video.paused;
      }

      return false;
    }

    render() {
      const {elapsedTime, progress} = this.state;
      const isPaused = this._getPlayerIsPaused();

      return <Component
        elapsedTime={elapsedTime}
        onChangeMode={this._handleChangeMode}
        onClosePlayer={this._handleClosePlayer}
        onClickPlayButton={this.__handleOnClickPlayButton}
        progress={progress}
        paused={isPaused}
        ref={this.videoRef} />;
    }
  }

  WithProgressBar.propTypes = {
    setActivePlayer: func.isRequired,
  };

  return WithProgressBar;
};


export default withProgressBar;
