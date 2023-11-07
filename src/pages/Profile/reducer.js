import { produce } from 'immer'; // Import produce dari Immer
import { GET_USER_ID, GET_USER_SUCCESS } from "./constants";

const initialState = {
    user: null,
    loading: false,
    error: null
}

const profileReducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case GET_USER_ID:
                draft.loading = true;
                draft.error = null;
                break;
            case GET_USER_SUCCESS:
                draft.user = action.payload;
                draft.loading = false;
                draft.error = null;
                break;
            default:
                break;
        }
    });
}

export default profileReducer;
