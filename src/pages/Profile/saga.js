import { takeLatest, put, call } from 'redux-saga/effects';
import { getUserById as getUserByIdAPI } from '../../domain/api';
import { getUserSuccess } from './actions';
import { GET_USER_ID } from './constants';

export function* doGetUser(action) {
    try {
        const userId = action.payload;
        const user = yield call(getUserByIdAPI, userId)
        yield put(getUserSuccess(user))
    } catch (error) {
        console.log(error)
    }
}

export function* profileSaga() {
    yield takeLatest(GET_USER_ID, doGetUser)
}