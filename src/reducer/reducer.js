import {combineReducers} from "redux";
import {reducer as films} from "./films/films.js";
import {reducer as genres} from "./genres/genres.js";
import NameSpace from "./name-space.js";


export default combineReducers({
  [NameSpace.FILMS]: films,
  [NameSpace.GENRES]: genres,
});
