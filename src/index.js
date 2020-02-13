import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from './mocks/films';

const promoData = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2004,
};

ReactDOM.render(
    <App promoData={promoData} films={films}/>,
    document.querySelector(`#root`)
);
