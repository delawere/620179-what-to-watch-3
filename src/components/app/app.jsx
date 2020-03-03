import React, {memo} from "react";
import {func, string, bool} from "prop-types";
import {connect} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import {FilmType} from "../../types";
import VideoPlayer from '../video-player/video-player.jsx';
import withProgress from '../../hocs/with-progress/with-progress.jsx';
import {getFilmsByGenre} from "../../reducer/films/selectors";
import {getGenreFilter} from "../../reducer/genres/selectors";

const VideoPlayerWithProgress = withProgress(VideoPlayer);

const App = (props) => {
  const {
    setActiveItem,
    activeItem,
    setActivePlayer,
    activePlayer,
    filteredFilms
  } = props;

  const handleOpenCard = (data) => {
    setActiveItem(data);
  };

  const renderVideoPlayer = () => <VideoPlayerWithProgress setActivePlayer={setActivePlayer}/>;
  const renderApp = () => (<BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main
          {...props}
          onOpenCard={handleOpenCard}
          filteredFilms={filteredFilms}
        />
      </Route>
      <Route path="/films/:id">
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
    activePlayer
      ? renderVideoPlayer()
      : renderApp()
  );
};

App.propTypes = {
  genreFilter: string,
  setActiveItem: func,
  activeItem: FilmType,
  setActivePlayer: func,
  activePlayer: bool,
};

const mapStateToProps = (state) => ({
  genreFilter: getGenreFilter(state),
  filteredFilms: getFilmsByGenre(state)
});

const AppWrapper = connect(mapStateToProps)(App);

export default memo(AppWrapper);
