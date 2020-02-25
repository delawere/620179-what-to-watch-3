import React, {PureComponent} from 'react';

const withActiveItem = (Component) => (
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItemData: {}
      };

      this._setActiveItemData = this._setActiveItemData.bind(this);
    }

    _setActiveItemData(data) {
      this.setState({
        activeItemData: data
      });
    }

    render() {
      const {activeItemData} = this.state;

      return <Component
        {...this.props}
        activeItemData={activeItemData}
        setActiveItemData={this._setActiveItemData}/>;
    }
  }
);


export default withActiveItem;
