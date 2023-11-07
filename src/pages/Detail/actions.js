import {
    FETCH_POST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE,
} from './constants';
  
export const fetchPost = (postId) => ({
    type: FETCH_POST,
    postId,
});
  
export const fetchPostSuccess = (post) => ({
    type: FETCH_POST_SUCCESS,
    post,
});
  
export const fetchPostFailure = (error) => ({
    type: FETCH_POST_FAILURE,
    error,
});
  
  