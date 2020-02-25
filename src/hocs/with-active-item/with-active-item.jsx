import React, {PureComponent} from 'react';

const withActiveItem = (Component) => (
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        openedCardData: {}
      };

      this._setOpenedCardData = this._setOpenedCardData.bind(this);
    }

    _setOpenedCardData(cardData) {
      this.setState({
        openedCardData: cardData
      });
    }

    render() {
      const {openedCardData} = this.state;

      return <Component {...this.props} openedCardData={openedCardData} setOpenedCardData={this._setOpenedCardData}/>;
    }
  }
);


export default withActiveItem;
