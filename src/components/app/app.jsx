import React, {memo} from 'react';
import {func} from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ActionCreator} from '../../reducer';
import Main from '../main/main.jsx';
import MovieDetails from '../movie-details/movie-details.jsx';
import {FilmsType, FilmType} from '../../types';
import {filterFilmsByGenre} from '../../utils/filterFilmsByGenre';

const App = (props) => {
  const {onSelectGenre, films, setOpenedCardData, openedCardData} = props;

  const handleOpenCard = ({name, img, genre}) => {
    onSelectGenre(genre, films);
    setOpenedCardData({name, img, genre});
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main {...props} onOpenCard={handleOpenCard}/>;
        </Route>
        <Route path="/dev-component">
          <MovieDetails cardData={openedCardData} onOpenCard={handleOpenCard}/>
        </Route>
      </Switch>
    </BrowserRouter>);
};

App.propTypes = {
  films: FilmsType,
  onSelectGenre: func,
  setOpenedCardData: func,
  openedCardData: FilmType
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

const AppWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


export default memo(AppWrapper);
