import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {Provider} from "react-redux";
import reducer, {ActionType} from "./reducer";
import App from "./components/app/app.jsx";
import films from './mocks/films';

const promoData = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2004,
};

const filmGenres = [`All genres`, ...new Set(films.map((film) => film.genre))];

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

store.dispatch({
  type: ActionType.SET_FIMLS,
  payload: films
});

store.dispatch({
  type: ActionType.SELECT_FILMS_BY_GENRE,
  payload: films
});

store.dispatch({
  type: ActionType.SET_GENRES,
  payload: filmGenres
});

ReactDOM.render(
    <Provider store={store}>
      <App promoData={promoData}/>
    </Provider>,
    document.querySelector(`#root`)
);
