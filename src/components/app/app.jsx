import React, {memo} from "react";
import {func, string} from "prop-types";
import {connect} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ActionCreator} from "../../reducer";
import Main from "../main/main.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import {FilmsType, FilmType} from "../../types";
import {filterFilmsByGenre} from "../../utils/filterFilmsByGenre";
import VideoPlayer from '../video-player/video-player.jsx';
import withControls from '../../hocs/with-controls/with-controls.jsx';

const VideoPlayerWithControls = withControls(VideoPlayer);

const App = (props) => {
  const {
    onSelectGenre,
    films,
    genreFilter,
    setActiveItem,
    activeItem,
    setActivePlayer,
    active
  } = props;

  const handleOpenCard = ({name, img, genre}) => {
    onSelectGenre(genre, films);
    setActiveItem({name, img, genre});
  };

  const filteredFilms = filterFilmsByGenre(genreFilter, films);

  const renderVideoPlayer = () => <VideoPlayerWithControls setActivePlayer={setActivePlayer}/>;
  const renderApp = () => (<BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main
          {...props}
          onOpenCard={handleOpenCard}
          filteredFilms={filteredFilms}
        />
      </Route>
      <Route path="/dev-component">
        <MovieDetails
          {...props}
          cardData={activeItem}
          onOpenCard={handleOpenCard}
          filteredFilms={filteredFilms}
        />
      </Route>
    </Switch>
  </BrowserRouter>);

  return (
    active
      ? renderVideoPlayer()
      : renderApp()
  );
};

App.propTypes = {
  films: FilmsType,
  genreFilter: string,
  onSelectGenre: func,
  setActiveItem: func,
  activeItem: FilmType
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

const AppWrapper = connect(mapStateToProps, mapDispatchToProps)(App);

export default memo(AppWrapper);
