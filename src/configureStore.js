import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))


sagaMiddleware.run(rootSaga)

// render the app
export default store;