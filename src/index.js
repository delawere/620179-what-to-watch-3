import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import reducer from "./reducer/reducer.js";
import {Operation} from './reducer/films/films.js';
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

store.dispatch(Operation.loadMovies());

const WrappedApp = withActiveCard(withPlayer(App));

ReactDOM.render(
    <Provider store={store}>
      <WrappedApp promoData={promoData}/>
    </Provider>,
    document.querySelector(`#root`)
);
