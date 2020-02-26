import React, {memo} from 'react';
import {func, string} from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ActionCreator} from '../../reducer';
import Main from '../main/main.jsx';
import MovieDetails from '../movie-details/movie-details.jsx';
import {FilmsType, FilmType} from '../../types';
import {filterFilmsByGenre} from '../../utils/filterFilmsByGenre';

const App = (props) => {
  const {onSelectGenre, films, genreFilter, setActiveItemData, activeItemData} = props;

  const handleOpenCard = ({name, img, genre}) => {
    onSelectGenre(genre, films);
    setActiveItemData({name, img, genre});
  };

  const filteredFilms = filterFilmsByGenre(genreFilter, films);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main {...props} onOpenCard={handleOpenCard} filteredFilms={filteredFilms}/>;
        </Route>
        <Route path="/dev-component">
          <MovieDetails cardData={activeItemData} onOpenCard={handleOpenCard} filteredFilms={filteredFilms}/>
        </Route>
      </Switch>
    </BrowserRouter>);
};

App.propTypes = {
  films: FilmsType,
  genreFilter: string,
  onSelectGenre: func,
  setActiveItemData: func,
  activeItemData: FilmType
};

const mapStateToProps = ({films, genreFilter}) => ({
  films,
  genreFilter
});

const mapDispatchToProps = (dispatch) => ({
  onSelectGenre: (genre) => {
    dispatch(ActionCreator.selectGenreFilter(genre));
  }
});

const AppWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


export default memo(AppWrapper);
