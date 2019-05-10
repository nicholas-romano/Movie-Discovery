export const MOVIES = "MOVIES";
export const ADD_LIKE = "ADD_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export function movies(items) {
  const action = {
    type: MOVIES,
    items
  }
  return action;
}

export function addToLikes(movie) {
  const action = {
    type: ADD_LIKE,
    movie
  }
  return action;
}

export function removeFromLikes(movie) {
  const action = {
    type: REMOVE_LIKE,
    movie
  }
  return action;
}
