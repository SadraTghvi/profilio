import {
    LANGS_LOADING,
    LANGS_LOADED,
    LANGS_ERROR,
} from '../actions/types';


const initialState = {
    langs: [],
    error: null,
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LANGS_LOADING:
            return {
                ...state,
                loading: true,
            }
        case LANGS_LOADED:
            return {
                ...state,
                langs: action.payload,
                error: null,
                loading: false,
            }
        case LANGS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state
    }
}