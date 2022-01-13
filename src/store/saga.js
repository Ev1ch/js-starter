import { all } from '@redux-saga/core/effects';
import homeSaga from 'containers/home/logic/saga';

function* rootSaga() {
  yield all([homeSaga()]);
}

export default rootSaga;
