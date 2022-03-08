import { all } from '@redux-saga/core/effects';
import homeSaga from 'store/home/saga';

function* rootSaga() {
  yield all([homeSaga()]);
}

export default rootSaga;
