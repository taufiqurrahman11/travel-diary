import { call, put, takeLatest } from 'redux-saga/effects'
import { getAllPost as getAllPostAPI } from "../../domain/api";
import { setAllPost } from "./actions";
import { GET_ALL_POST } from './constants';

export function* doGetAllPost() {
    try {
        const response = yield call(getAllPostAPI)
        yield put(setAllPost(response))
    } catch (error) {
        console.log(error)
    }
}

export default function* homeSaga() {
    yield takeLatest(GET_ALL_POST, doGetAllPost);
}