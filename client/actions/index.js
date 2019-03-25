import { createActions } from 'redux-actions';

export default createActions({
  GREET: undefined,
  SUCCESS: name => ({ name }),
  FAILED: message => ({ message }),
  TEST: data => ({ data }),
  // LOGIN:{
  //   FIELD_CHANGE: fields => ({ fields }),
  //   LOADING: undefined,
  //   LOGIN: ({ username, password }) => ({ username, password }),
  //   LOGINED: undefined,
  //   REJECTED: message => ({ message }),
  // }
});
