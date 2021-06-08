import {
    PROJECTS_LOADING,
    PROJECTS_LOADED,
    PROJECTS_ERROR,
} from '../actions/types';


const initialState = {
    projects: [],
    error: null,
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case PROJECTS_LOADING:
            return {
                ...state,
                loading: true,
            }
        case PROJECTS_LOADED:
            return {
                ...state,
                projects: action.payload,
                error: null,
                loading: false,
            }
        case PROJECTS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state
    }
}