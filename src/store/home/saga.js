import { takeEvery, all } from 'redux-saga/effects';
import * as actionsTypes from './actions-types';

function* worker({ payload }) {
  try {
    yield payload;
  } catch (error) {
    yield;
  }
}

function* watcher() {
  yield takeEvery(actionsTypes.ACTION_TYPE, worker);
}

function* saga() {
  yield all([watcher()]);
}

export default saga;
