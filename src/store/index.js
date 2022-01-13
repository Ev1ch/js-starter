import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, middlewares);
sagaMiddleware.run(saga);

export default store;
