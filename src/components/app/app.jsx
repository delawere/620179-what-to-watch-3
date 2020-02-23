import React, {PureComponent} from 'react';
import {func} from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ActionCreator} from '../../reducer';
import Main from '../main/main.jsx';
import MovieDetails from '../movie-details/movie-details.jsx';
import {FilmsType} from '../../types';
import {filterFilmsByGenre} from '../../utils/filterFilmsByGenre';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      openedCardData: null
    };

    this._handleOpenCard = this._handleOpenCard.bind(this);
  }

  _handleOpenCard({name, img, genre}) {
    const {onSelectGenre, films} = this.props;

    onSelectGenre(genre, films);
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

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main {...this.props} onOpenCard={this._handleOpenCard}/>;
          </Route>
          <Route path="/dev-component">
            <MovieDetails cardData={openedCardData} onOpenCard={this._handleOpenCard}/>
          </Route>
        </Switch>
      </BrowserRouter>);
  }
}

App.propTypes = {
  films: FilmsType,
  onSelectGenre: func
};

const mapStateToProps = ({films}) => ({
  films
});

const mapDispatchToProps = (dispatch) => ({
  onSelectGenre: (genre, films) => {
    dispatch(ActionCreator.selectGenreFilter(genre));
    dispatch(
        ActionCreator.selectFilmsByGenre(filterFilmsByGenre(genre, films))
    );
  }
});

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


export default App;
