import { produce } from 'immer';
import { CREATE_USER } from './constants';

const initialState = {
    user: null,
    loading: false,
    error: null,
};

const registerReducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case CREATE_USER:
                draft.loading = true;
                draft.error = null;
                break;
            case `${CREATE_USER}_SUCCESS`:
                draft.user = action.data;
                draft.loading = false;
                break;
            case `${CREATE_USER}_FAILURE`:
                draft.error = action.error;
                draft.loading = false;
                break;
            default:
                break;
        }
    });
};

export default registerReducer;
