import React, {PureComponent} from 'react';
import {array} from 'prop-types';
import Main from '../main/main.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MovieDetails from '../movie-details/movie-details.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      openedCardData: null
    };

    this._handleOpenCard = this._handleOpenCard.bind(this);
  }


  _handleOpenCard({name, img, genre}) {
    this.setState({
      openedCardData: {
        name,
        img,
        genre,
      }
    });
  }

  render() {
    const {openedCardData} = this.state;
    const {films} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main {...this.props} onOpenCard={this._handleOpenCard}/>;
          </Route>
          <Route path="/dev-component">
            <MovieDetails cardData={openedCardData} films={films} onOpenCard={this._handleOpenCard}/>
          </Route>
        </Switch>
      </BrowserRouter>);
  }
}

App.propTypes = {
  films: array
};

export default App;
