import {ADD_LIKE, REMOVE_LIKE} from '../actions';

function likes(state = [], action) {
  switch(action.type) {
    case ADD_LIKE:
      let likes = [...state, action.movie];
      return likes;
    case REMOVE_LIKE:
      likes = state.filter((like)=>like.id !== action.movie.id);
      return likes;
    default:
      return state;
  }
}

export default likes;
