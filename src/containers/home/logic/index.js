import * as actionsTypes from './actions-types';
import initialState from './state';

function reducer(state = initialState, action) {
  switch (action.type) {
    case [actionsTypes.ACTION_TYPE]:
      return { ...state };
    default:
      return { ...state };
  }
}

export default reducer;
