import { createActions } from 'redux-actions';

export default createActions({
  GREET: undefined,
  SUCCESS: name => ({ name }),
  FAILED: message => ({ message }),
  TEST: data => ({ data }),
  LOADING: undefined,
  LOADED: undefined,
  LOGIN:{
    FIELD_CHANGE: fields => ({ fields }),
    LOGIN: ({ name, password }) => ({name, password}),
    REJECTED: message => ({ message }),
  }
});
