import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.FILMS;

export const getFilms = (state) => state[NAME_SPACE].films;
export const getShownCardsNumber = (state) => state[NAME_SPACE].shownCardsNumber;
