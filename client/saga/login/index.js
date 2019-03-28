import axios from 'client/utils/request';


function* _login({payload:{username, password}}) {
  console.log('ssss', name, password);
  // yield put(actions.loading());
  try {
    const res = yield axios.post('jsapi/login', { name, password });
    console.log('fetch res: ', res);
  }catch(e){

  }
}

export const login = _login;

// export default login = {
//   login: login
// }