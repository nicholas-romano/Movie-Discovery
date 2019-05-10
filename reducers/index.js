import movies from './movies-reducer';
import likes from './likes-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  movies,
  likes
});

export default rootReducer;
