import React, {PureComponent} from 'react';

const withActiveItem = (Component) => (
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: {},
        timer: null
      };

      this._setActiveItem = this._setActiveItem.bind(this);
      this._removeActiveItem = this._removeActiveItem.bind(this);
      this._setTimer = this._setTimer.bind(this);
      this._getTimer = this._getTimer.bind(this);
      this._removeTimer = this._removeTimer.bind(this);
    }

    _setActiveItem(item) {
      this.setState({
        activeItem: item
      });
    }

    _removeActiveItem() {
      this.setState({
        activeItem: {}
      });
    }

    _setTimer(timerId) {
      this.setState({
        timer: timerId
      });
    }

    _getTimer() {
      return this.state.timer;
    }

    _removeTimer() {
      clearTimeout(this._getTimer());
      this.setState({
        timer: null
      });
    }

    componentWillUnmount() {
      this._setActiveItem({});
      this._removeTimer();
    }

    render() {
      const {activeItem} = this.state;

      return <Component
        {...this.props}
        activeItem={activeItem}
        setActiveItem={this._setActiveItem}
        removeActiveItem={this._removeActiveItem}
        setTimer={this._setTimer}
        getTimer={this._getTimer}
        removeTimer={this._removeTimer}/>;
    }
  }
);

export default withActiveItem;
