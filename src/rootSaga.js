import { all } from 'redux-saga/effects'
import registerSaga from './pages/Register/saga'
import loginSaga from './pages/Login/saga'
import homeSaga from './pages/Home/saga'
import detailSaga from './pages/Detail/saga'
import addPostSaga from './pages/AddPost/saga'

export default function* rootSaga() {
    yield all([
      registerSaga(),
      loginSaga(),
      homeSaga(),
      detailSaga(),
      addPostSaga(),
    ])
  }