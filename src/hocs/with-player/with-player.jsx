import React, {PureComponent} from 'react';

const SHOW_PREVIEW_DELAY = 1000;

const withPlayer = (Component) => (
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: null,
        mouseOverTimer: null
      };

      this._clearTimer = this._clearTimer.bind(this);
      this._setActiveCardAfterDelay = this._setActiveCardAfterDelay.bind(this);
    }

    _setActiveCardAfterDelay(cardName) {
      const mouseOverTimer = setTimeout(() => {
        this.setState({
          activeCard: cardName
        });
      }, SHOW_PREVIEW_DELAY);

      this.setState({
        mouseOverTimer
      });
    }

    _clearTimer() {
      const {mouseOverTimer} = this.state;

      clearTimeout(mouseOverTimer);

      this.setState({
        activeCard: null
      });
    }

    componentWillUnmount() {
      this._clearTimer();
    }

    render() {
      const {activeCard} = this.state;

      return <Component
        {...this.props}
        activeCard={activeCard}
        setActiveCard={this._setActiveCardAfterDelay}
        removeActiveCard={this._clearTimer}/>;
    }
  }
);

export default withPlayer;
