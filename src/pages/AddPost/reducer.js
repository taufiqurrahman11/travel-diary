import { produce } from "immer";
import { CREATE_POST } from './constants';

const initialState = {
    user: null,
    loading: false,
    error: null,
}

const addPostReducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case CREATE_POST:
                draft.loading = true;
                draft.error = null;
                break;
            case `${CREATE_POST}_SUCCESS`:
                draft.user = action.data;
                draft.loading = false;
                break;
            case `${CREATE_POST}_FAILURE`:
                draft.error = action.error;
                draft.loading = false;
                break;
            default:
                break;
        }
    });
};

export default addPostReducer;