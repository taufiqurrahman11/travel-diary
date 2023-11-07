import { produce } from "immer";
import { GET_ALL_POST, SET_ALL_POST } from "./constants";

export const initialState = {
    posts: [],
};

const homeReducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch(action.type) {
            case SET_ALL_POST:
                draft.posts = action.posts;
                break;
        }
    })
}

export default homeReducer;