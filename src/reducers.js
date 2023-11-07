import { combineReducers } from "redux";
import registerReducer from "./pages/Register/reducer";
import loginReducer from "./pages/Login/reducer";
import homeReducer from "./pages/Home/reducer";
import detailReducer from "./pages/Detail/reducer";
import addPostReducer from "./pages/AddPost/reducer"


const rootReducer = combineReducers({
    registerReducer: registerReducer,
    loginReducer: loginReducer,
    homeReducer: homeReducer,
    detailReducer: detailReducer,
    addPostReducer: addPostReducer,
});

export default rootReducer;