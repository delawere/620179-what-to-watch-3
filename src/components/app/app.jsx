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

    this.handleOpenCard = this.handleOpenCard.bind(this);
  }


  handleOpenCard({name, img, genre}, cb) {
    this.setState({
      openedCardData: {
        name,
        img,
        genre,
      }
    }, cb);
  }

  render() {
    const {openedCardData} = this.state;
    const {films} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main {...this.props} onOpenCard={this.handleOpenCard}/>;
          </Route>
          <Route exact path="/dev-component">
            <MovieDetails cardData={openedCardData} films={films} onOpenCard={this.handleOpenCard}/>
          </Route>
        </Switch>
      </BrowserRouter>);
  }
}

App.propTypes = {
  films: array
};

export default App;
