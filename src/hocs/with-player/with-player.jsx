import React, {PureComponent} from 'react';
import {bool} from 'prop-types';
import VideoPlayer from '../../components/video-player/video-player.jsx';
import withControls from '../with-controls/with-controls.jsx';

const VidePlayerWithControls = withControls(VideoPlayer);

const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        active: false
      };

      this._setActivePlayer = this._setActivePlayer.bind(this);
    }

    _setActivePlayer(active) {
      this.setState({
        active
      });
    }

    render() {
      const {active} = this.state;

      return (
        <>
          {active ? <VidePlayerWithControls setActivePlayer={this._setActivePlayer}/> : null}
          <Component {...this.props} setActivePlayer={this._setActivePlayer}/>
        </>
      );
    }
  }

  WithPlayer.propTypes = {
    active: bool
  };

  return WithPlayer;
};


export default withPlayer;
