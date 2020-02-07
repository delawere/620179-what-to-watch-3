import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const promoData = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2004,
};

const moviesList = [
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    name: `Bohemian Rhapsody`,
    img: `img/bohemian-rhapsody.jpg`,
  },
  {
    name: `Macbeth`,
    img: `img/macbeth.jpg`,
  }
];

ReactDOM.render(
    <App promoData={promoData} moviesList={moviesList}/>,
    document.querySelector(`#root`)
);
