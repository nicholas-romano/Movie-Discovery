import {MOVIES} from '../actions';

export default function movies(state = [], action) {
  switch(action.type) {
    case MOVIES:
      return action.items;
    default:
      return state;
  }
}
