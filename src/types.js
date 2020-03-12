import {shape, exact, arrayOf, string, number, bool, func, oneOf, object, oneOfType, array} from "prop-types";

export const FilmType = shape({
  backgroundColor: string,
  backgroundImage: string,
  description: string,
  director: string,
  genre: string,
  id: number,
  isFavorite: bool,
  name: string,
  posterImage: string,
  previewImage: string,
  previewVideoLink: string,
  rating: number,
  released: number,
  runTime: number,
  scoresCount: number,
  starring: arrayOf(string),
  videoLink: string
});

export const FilmsType = arrayOf(FilmType);

export const CommentType = exact({
  id: number,
  user: exact({
    id: number,
    name: string
  }),
  rating: number,
  comment: string,
  date: string
});

export const CommentsType = arrayOf(CommentType);

export const LoacationType = shape({
  hash: string.isRequired,
  key: string,
  pathname: string.isRequired,
  search: string.isRequired,
  state: oneOfType([array, bool, number, object, string])
});

export const HistoryType = shape({
  action: oneOf([`PUSH`, `REPLACE`, `POP`]).isRequired,
  block: func.isRequired,
  canGo: func,
  createHref: func.isRequired,
  entries: arrayOf(LoacationType),
  go: func.isRequired,
  goBack: func.isRequired,
  goForward: func.isRequired,
  index: number,
  length: number,
  listen: func.isRequired,
  location: LoacationType.isRequired,
  push: func.isRequired,
  replace: func.isRequired
});

export const MatchType = shape({
  isExact: bool,
  params: object.isRequired,
  path: string.isRequired,
  url: string.isRequired
});

export const UserType = shape({
  id: number,
  email: string,
  name: string,
  avatarUrl: string
});
