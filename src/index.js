import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {BrowserRouter} from "react-router-dom";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import history from "./history.js";
import reducer from "./reducer/reducer.js";
import {Operation as FilmsOperation} from "./reducer/films/films.js";
import {Operation as UserOperation} from "./reducer/user/user.js";
import {Operation as FavoritesOperation} from "./reducer/favorites/favorites.js";
import withActiveCard from "./hocs/with-active-card/with-active-card.jsx";
import withPlayer from "./hocs/with-player/with-player.jsx";
import {createAPI} from "./api.js";
import App from "./components/app/app.jsx";

const api = createAPI(() => {
  history.push(`./login`);
});

const promoData = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2004
};

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : (f) => f
    )
);

store.dispatch(FilmsOperation.loadMovies());
store.dispatch(FavoritesOperation.loadFavorites());
store.dispatch(UserOperation.check());

const WrappedApp = withActiveCard(withPlayer(App));

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={history}>
        <WrappedApp promoData={promoData} />
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);
