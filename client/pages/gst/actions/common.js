import { createActions } from 'redux-actions';

export default createActions({
  COMMON: {
    SIDER_FOLD: undefined,
    TOGGLE_THEME: theme => ({ theme }),
  },
})