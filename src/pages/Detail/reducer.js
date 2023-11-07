import { FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from './constants';

const initialState = {
  post: null,
  error: null,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        post: action.post,
        error: null,
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        post: null,
        error: action.error,
      };
    default:
      return state;
  }
};

export default detailReducer;
