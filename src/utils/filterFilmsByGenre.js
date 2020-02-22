const ALL_GENRES_FILTER = `ALL GENRES`;

export const filterFilmsByGenre = (genre, filmsList) => {
  const selectedGenre = genre.toUpperCase();

  return selectedGenre === ALL_GENRES_FILTER
    ? filmsList
    : filmsList.filter((film) => film.genre.toUpperCase() === selectedGenre);
};
