import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';

// Combine all custom reducers along with routeReducer, which keeps track of router state
const rootReducer = combineReducers({
  user,
  routing: routerReducer
});

export default rootReducer;
