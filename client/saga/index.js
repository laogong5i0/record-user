import createSagaMiddleware from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import actions from '../actions';

// create the saga middleware
export const sagaMiddleware = createSagaMiddleware();

function* greet() {
  yield put(actions.success('everyone'));
}


function* test(){
  yield put(actions.success('test function'));
}

function* mySaga() {
  yield takeLatest(actions.greet, greet);
  yield takeLatest(actions.test, test);
}


export default mySaga;

// entry point
export const run = () => {
  sagaMiddleware.run(mySaga);
};

// function* login({ payload: { username, password } }) {
//   yield put(actions.loading());
//   try {
//     const res = yield axios.post('login', {
//       username,
//       password,
//     });
//     if (res.statusText === 'OK' && res.data.success) {
//       yield put(actions.logined());
//       setTimeout(() => {
//         const url = queryString.parse(window.location.search).r || '/dashboard';
//         window.location.href = url;
//       }, 1000);
//     } else {
//       yield put(
//         actions.rejected(res.data.message || 'Error password or username')
//       );
//     }
//   } catch (e) {
//     console.log(e);
//   }
// }