import { combineReducers } from 'redux';
import homeReducer from 'containers/home/logic';

const reducer = combineReducers({
  home: homeReducer,
});

export default reducer;
