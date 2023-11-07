import { produce } from 'immer';
import { LOGIN_USER } from './constants';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_USER:
        draft.loading = true;
        draft.error = null;
        break;
      case `${LOGIN_USER}_SUCCESS`:
        draft.user = action.data;
        draft.loading = false;
        break;
      case `${LOGIN_USER}_FAILURE`:
        draft.error = action.error;
        draft.loading = false;
        break;
      default:
        break;
    }
  });
};

export default loginReducer;
