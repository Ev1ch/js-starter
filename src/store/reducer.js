import { combineReducers } from 'redux';
import homeReducer from 'store/home';

const reducer = combineReducers({
  home: homeReducer,
});

export default reducer;
