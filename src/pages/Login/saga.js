import { call, put, takeLatest } from "redux-saga/effects";
import { loginUser } from "./actions";
import { loginUser as loginUserAPI } from "../../domain/api";
import { LOGIN_USER } from "./constants";

export function* doLoginUser({ user }) {
  try {
    const response = yield call(loginUserAPI, user);
    yield put(loginUserSuccess(response));
  } catch (error) {
    yield put(loginUserFailure(error));
  }
}

export default function* loginSaga() {
  yield takeLatest(LOGIN_USER, doLoginUser);
}

export function loginUserSuccess(data) {
  return {
    type: `${LOGIN_USER}_SUCCESS`,
    data,
  };
}

export function loginUserFailure(error) {
  return {
    type: `${LOGIN_USER}_FAILURE`,
    error,
  };
}
