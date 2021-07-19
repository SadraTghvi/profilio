import {
    THEME,
} from '../actions/types';


const initialState = {
    theme: 'light',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case THEME:
            return {
                ...state,
                theme: action.payload,
            }
        default:
            return state
    }
}