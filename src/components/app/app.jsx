import React, {PureComponent} from "react";
import {func, string, bool, array} from "prop-types";
import {connect} from "react-redux";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import {FilmType} from "../../types";
import VideoPlayer from "../video-player/video-player.jsx";
import withProgress from "../../hocs/with-progress/with-progress.jsx";
import {getFilmsByGenre} from "../../reducer/films/selectors";
import {getGenreFilter} from "../../reducer/genres/selectors";
import {getAuthStatus} from "../../reducer/user/selectors.js";
import SignIn from '../sign-in/sign-in.jsx';

const VideoPlayerWithProgress = withProgress(VideoPlayer);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._handleOpenCard = this._handleOpenCard.bind(this);
    this._renderVideoPlayer = this._renderVideoPlayer.bind(this);
    this._renderApp = this._renderApp.bind(this);
  }

  // componentDidUpdate() {
  //   const {isAuth, history} = this.props;
  //   if (!isAuth) {
  //     history.push(`/login`);
  //   }
  // }

  _handleOpenCard(data) {
    const {setActiveItem} = this.props;
    setActiveItem(data);
  }

  _renderVideoPlayer() {
    const {setActivePlayer} = this.props;
    return <VideoPlayerWithProgress setActivePlayer={setActivePlayer} />;
  }

  _renderApp() {
    const {filteredFilms, activeItem} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              {...this.props}
              onOpenCard={this._handleOpenCard}
              filteredFilms={filteredFilms}
            />
          </Route>
          <Route path="/films/:id">
            <MovieDetails
              {...this.props}
              cardData={activeItem}
              onOpenCard={this._handleOpenCard}
              filteredFilms={filteredFilms}
            />
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  render() {
    return (
      this.props.activePlayer ? this._renderVideoPlayer() : this._renderApp()
    );
  }
}

App.propTypes = {
  genreFilter: string,
  setActiveItem: func,
  activeItem: FilmType,
  setActivePlayer: func,
  activePlayer: bool,
  isAuth: bool,
  filteredFilms: array,
};

const mapStateToProps = (state) => ({
  genreFilter: getGenreFilter(state),
  filteredFilms: getFilmsByGenre(state),
  isAuth: getAuthStatus(state) === `AUTH`
});

const AppWrapper = connect(mapStateToProps)(App);

export default withRouter(AppWrapper);
