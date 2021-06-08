import {
    PROFILE_ERROR,
    PROFILE_LOADED,
    PROFILE_LOADING,
} from '../actions/types';


const initialState = {
    loading: false,
    profile: null,
    error: null,
};


export default function (state = initialState, action) {
    switch (action.type) {
        case PROFILE_LOADING:
            return {
                ...state,
                loading: true,
            };
        case PROFILE_LOADED:
            return {
                ...state,
                profile: action.payload,
                loading: false,
                error: null,
            };
        case PROFILE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}