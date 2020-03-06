export const Operation = {
  addComment: (filmId, data) => (dispatch, _, api) => {
    debugger
    return api.post(`/comments/${filmId}`, data);
  },
};
