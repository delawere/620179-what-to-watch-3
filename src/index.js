import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {Provider} from "react-redux";
import reducer from "./reducer";
import App from "./components/app/app.jsx";
import films from './mocks/films';

const promoData = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2004,
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

const filmGenres = [`All genres`, ...new Set(films.map((film) => film.genre))];

ReactDOM.render(
    <Provider store={store}>
      <App promoData={promoData} films={films} genres={filmGenres}/>
    </Provider>,
    document.querySelector(`#root`)
);
