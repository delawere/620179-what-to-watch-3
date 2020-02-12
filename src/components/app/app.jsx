import React, {PureComponent} from 'react';
import Main from '../main/main.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      openedCardData: null
    };

    this.handleOpenCard = this.handleOpenCard.bind(this);
  }


  handleOpenCard({name, img}) {
    this.setState({
      openedCardData: {
        name,
        img
      }
    });
  }

  render() {
    const {openedCardData} = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main {...this.props} openedCardData={openedCardData} onOpenCard={this.handleOpenCard}/>;
          </Route>
        </Switch>
      </BrowserRouter>);
  }
}

export default App;
