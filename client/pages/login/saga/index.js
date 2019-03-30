import createSagaMiddleware from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'client/utils/request';
import queryString from 'query-string';
import actions from '../actions';

// create the saga middleware
export const sagaMiddleware = createSagaMiddleware();

function* login({ payload: { username, password } }) {
  yield put(actions.loading());
  try {
    const res = yield axios.post('jsapi/login', {
      username,
      password,
    });
    console.log(res);
    if (res.statusText === 'OK' && res.data.status===0) {
      yield put(actions.logined());
      setTimeout(() => {
        const url = queryString.parse(window.location.search).r || '/gst';
        window.location.href = url;
      }, 1000);
    } else {
      yield put(
        actions.rejected(res.data.message || 'Error password or username')
      );
    }
  } catch (e) {
    console.log(e);
  }
}

function* saga() {
  yield takeLatest(actions.login, login);
}

// entry point
export const run = () => {
  sagaMiddleware.run(saga);
};

export default {
  saga,
  sagaMiddleware,
  run,
};
