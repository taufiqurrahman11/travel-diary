import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_POST,
  fetchPostSuccess,
  fetchPostFailure,
} from './constants';
import { getPostById } from '../../domain/api';

export function* fetchPostDetails(action) {
  try {
    const postId = action.postId;
    const post = yield call(getPostById, postId);
    
    yield put(fetchPostSuccess(post));
  } catch (error) {
    yield put(fetchPostFailure(error));
  }
}

export function* detailSaga() {
  yield takeLatest(FETCH_POST, fetchPostDetails);
}

export default detailSaga;
