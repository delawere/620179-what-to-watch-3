import React, {PureComponent} from 'react';
import {bool} from 'prop-types';

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        active: false
      };

      this._setActive = this._setActive.bind(this);
    }

    componentDidUpdate(prevProps) {
      const {active} = this.props;

      if (prevProps.active !== active) {
        this._setActive(active);
      }
    }

    _setActive(active) {
      this.setState({
        active
      });
    }

    render() {
      const {active} = this.state;

      return <Component {...this.props} active={active}/>;
    }
  }

  WithActivePlayer.propTypes = {
    active: bool
  };

  return WithActivePlayer;
};


export default withActivePlayer;
