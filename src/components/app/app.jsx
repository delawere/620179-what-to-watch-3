import React, {PureComponent} from 'react';
import Main from '../main/main.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MovieDetails from '../movie-details/movie-details.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      openedCardData: null
    };

    this.handleOpenCard = this.handleOpenCard.bind(this);
  }


  handleOpenCard({name, img}, cb) {
    this.setState({
      openedCardData: {
        name,
        img
      }
    }, cb);
  }

  render() {
    const {openedCardData} = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main {...this.props} onOpenCard={this.handleOpenCard}/>;
          </Route>
          <Route exact path="/dev-component">
            <MovieDetails cardData={openedCardData} />
          </Route>
        </Switch>
      </BrowserRouter>);
  }
}

export default App;
