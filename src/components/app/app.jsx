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
  const {onSelectGenre, films, setActiveItemData, activeItemData} = props;

  const handleOpenCard = ({name, img, genre}) => {
    onSelectGenre(genre, films);
    setActiveItemData({name, img, genre});
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main {...props} onOpenCard={handleOpenCard}/>;
        </Route>
        <Route path="/dev-component">
          <MovieDetails cardData={activeItemData} onOpenCard={handleOpenCard}/>
        </Route>
      </Switch>
    </BrowserRouter>);
};

App.propTypes = {
  films: FilmsType,
  onSelectGenre: func,
  setActiveItemData: func,
  activeItemData: FilmType
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
