import React, {PureComponent} from "react";

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
          <Component
            {...this.props}
            active={active}
            setActivePlayer={this._setActivePlayer}
          />
        </>
      );
    }
  }

  return WithPlayer;
};

export default withPlayer;
