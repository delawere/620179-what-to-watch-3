import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from 'redux';
import {BrowserRouter} from "react-router-dom";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import reducer from "./reducer/reducer.js";
import {Operation as FilmsOperation} from './reducer/films/films.js';
import {Operation as UserOperation} from './reducer/user/user.js';
import withActiveCard from './hocs/with-active-card/with-active-card.jsx';
import withPlayer from './hocs/with-player/with-player.jsx';
import {createAPI} from "./api.js";

const api = createAPI(() => {});

const promoData = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2004,
};

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(FilmsOperation.loadMovies());
store.dispatch(UserOperation.check());

const WrappedApp = withActiveCard(withPlayer(App));

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <WrappedApp promoData={promoData}/>
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);
