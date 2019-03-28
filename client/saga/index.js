import createSagaMiddleware from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import actions from '../actions';
import {login} from './login'

// create the saga middleware
export const sagaMiddleware = createSagaMiddleware();

function* greet() {
  yield put(actions.success('everyone'));
}

function* mySaga() {
  yield takeLatest(actions.greet, greet);
  yield takeLatest(actions.test, test);

  yield takeLatest(actions.login.login, login);
}

export default mySaga;

// entry point
export const run = () => {
  sagaMiddleware.run(mySaga);
};
