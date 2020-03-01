import React, {PureComponent} from "react";

const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayer: false
      };

      this._setActivePlayer = this._setActivePlayer.bind(this);
    }

    _setActivePlayer(activePlayer) {
      this.setState({
        activePlayer
      });
    }

    render() {
      const {activePlayer} = this.state;

      return (
        <>
          <Component
            {...this.props}
            activePlayer={activePlayer}
            setActivePlayer={this._setActivePlayer}
          />
        </>
      );
    }
  }

  return WithPlayer;
};

export default withPlayer;
