import { call, put, takeLatest } from "redux-saga/effects";
import { createPost as createPostAPI } from "../../domain/api";
import { CREATE_POST } from "./constants";

export function* doCreatePost({ post }) {
    try {
        const response = yield call(createPostAPI, post)
        yield put(create(response))
    } catch (error) {
        
    }
}

export default function* addPostSaga() {
    yield takeLatest(CREATE_POST, doCreatePost)
}

export function createPostSuccess(data) {
    return {
        type: `${CREATE_POST}_SUCCESS`,
        data,
    };
}

export function createPostFailure(error) {
    return {
        type: `${CREATE_POST}_FAILURE`,
        error,
    };
}