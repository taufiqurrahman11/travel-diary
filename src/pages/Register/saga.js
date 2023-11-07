import { call, put, takeLatest } from "redux-saga/effects";
import { createUser } from "./actions";
import { createUser as createUserAPI } from "../../domain/api";
import { CREATE_USER } from "./constants";

export function* doCreateUser({ user }) {
    try {
        const response = yield call(createUserAPI, user);
        yield put(createUserSuccess(response))
    } catch (error) {
        yield put(createUserFailure(error))
    }
}

export default function* registerSaga() {
    yield takeLatest(CREATE_USER, doCreateUser)
}

export function createUserSuccess(data) {
    return {
        type: `${CREATE_USER}_SUCCESS`,
        data,
    };
}

export function createUserFailure(error) {
    return {
        type: `${CREATE_USER}_FAILURE`,
        error,
    };
}