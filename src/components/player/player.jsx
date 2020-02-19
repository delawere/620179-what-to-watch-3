import React, {PureComponent} from 'react';
import {string, bool} from 'prop-types';

class Player extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.active !== this.props.active) {
      this.setState({
        active: this.props.active
      });
    }
  }

  render() {
    const {active} = this.state;
    const {src, img} = this.props;

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
  }
}

Player.propTypes = {
  src: string,
  img: string,
  active: bool,
};

export default Player;


