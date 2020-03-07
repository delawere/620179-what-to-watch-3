import React, {PureComponent} from "react";
import {func, string, bool} from "prop-types";
import {connect} from "react-redux";
import {Route, Switch, withRouter} from "react-router-dom";
import {FilmsType, FilmType} from "../../types";
import {AUTH} from '../../consts.js';
import {getFilmsByGenre} from "../../reducer/films/selectors";
import {getGenreFilter} from "../../reducer/genres/selectors";
import {getUser, getAuthStatus} from "../../reducer/user/selectors.js";
import withProgress from "../../hocs/with-progress/with-progress.jsx";
import withInputs from "../../hocs/with-inputs/with-inputs.jsx";
import withCheckAuth from '../../hocs/with-check-auth/with-check-auth.jsx';
import withReviewData from '../../hocs/with-review-data/with-review-data.jsx';
import Main from "../main/main.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import VideoPlayer from "../video-player/video-player.jsx";
import SignIn from '../sign-in/sign-in.jsx';
import AddReview from '../add-review/add-review.jsx';

const VideoPlayerWithProgress = withProgress(VideoPlayer);
const SignInWithInputs = withCheckAuth(withInputs(SignIn));
const RewiewWithReviewData = withReviewData(AddReview);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._handleOpenCard = this._handleOpenCard.bind(this);
    this._renderVideoPlayer = this._renderVideoPlayer.bind(this);
    this._renderApp = this._renderApp.bind(this);
  }

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
          <SignInWithInputs />
        </Route>
        <Route path="/dev-review">
          <RewiewWithReviewData />
        </Route>
      </Switch>
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
  filteredFilms: FilmsType,
};

const mapStateToProps = (state) => ({
  genreFilter: getGenreFilter(state),
  filteredFilms: getFilmsByGenre(state),
  user: getUser(state),
  isAuth: getAuthStatus(state) === AUTH
});

const AppWrapper = connect(mapStateToProps)(App);

export {App};
export default withRouter(AppWrapper);
