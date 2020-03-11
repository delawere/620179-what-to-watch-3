// Libs
import React, {PureComponent} from "react";
import {func, string, bool} from "prop-types";
import {connect} from "react-redux";
import {Route, Switch, withRouter} from "react-router-dom";
// Utils
import {LOGIN, INDEX, FILMS_$ID_PLAYER, FILMS_$ID_REVIEW, FILMS_$ID, MY_LIST} from '../../router/paths';
import {FilmsType, FilmType, HistoryType} from "../../types";
import {getFilmsByGenre} from "../../reducer/films/selectors";
import {getGenreFilter} from "../../reducer/genres/selectors";
import {getFilms} from "../../reducer/films/selectors";
import {getUser, getIsAuth} from "../../reducer/user/selectors.js";
import withProgress from "../../hocs/with-progress/with-progress.jsx";
import withInputs from "../../hocs/with-inputs/with-inputs.jsx";
import withCheckAuth from "../../hocs/with-check-auth/with-check-auth.jsx";
import withReviewData from "../../hocs/with-review-data/with-review-data.jsx";
// Components
import Main from "../main/main.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import VideoPlayer from "../video-player/video-player.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import AddReview from "../add-review/add-review.jsx";
import MyList from "../my-list/my-list.jsx";
import PrivateRoute from '../private-route/private-route.jsx';
import {getPromo} from "../../reducer/promo/selectors";

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
    const {filteredFilms, activeItem, promo, setActivePlayer, history, films} = this.props;
    return (
      <Switch>
        <Route exact path={INDEX}>
          <Main
            {...this.props}
            onOpenCard={this._handleOpenCard}
            filteredFilms={filteredFilms}
            promoData={promo}
            history={history}
          />
        </Route>
        <Route path={FILMS_$ID_PLAYER}>
          <VideoPlayerWithProgress setActivePlayer={setActivePlayer} history={history} films={films}/>
        </Route>
        <PrivateRoute exact path={FILMS_$ID_REVIEW} render={() => (
          <RewiewWithReviewData />
        )}>
        </PrivateRoute>
        <Route path={FILMS_$ID}>
          <MovieDetails
            {...this.props}
            cardData={activeItem}
            onOpenCard={this._handleOpenCard}
            filteredFilms={filteredFilms}
            setActivePlayer={setActivePlayer}
          />
        </Route>
        <Route path={LOGIN}>
          <SignInWithInputs />
        </Route>
        <PrivateRoute exact path={MY_LIST} render={() => (
          <MyList />
        )}>
        </PrivateRoute>
      </Switch>
    );
  }

  render() {
    return this.props.activePlayer
      ? this._renderVideoPlayer()
      : this._renderApp();
  }
}

App.propTypes = {
  history: HistoryType,
  genreFilter: string,
  setActiveItem: func,
  activeItem: FilmType,
  setActivePlayer: func,
  activePlayer: bool,
  isAuth: bool,
  filteredFilms: FilmsType,
  promo: FilmType,
  films: FilmsType,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  genreFilter: getGenreFilter(state),
  filteredFilms: getFilmsByGenre(state),
  user: getUser(state),
  isAuth: getIsAuth(state),
  promo: getPromo(state)
});

const AppWrapper = connect(mapStateToProps)(App);

export {App};
export default withRouter(AppWrapper);
