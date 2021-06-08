import axios from 'axios';
import {
    PROFILE_LOADING,
    PROFILE_LOADED,
    PROFILE_ERROR,
} from './types';


export default () => (dispatch) => {
    dispatch({ type: PROFILE_LOADING });

    axios.get('/api/profile/')
    .then(res => {
        dispatch({
            type: PROFILE_LOADED,
            payload: res.data.profile || null
        });
    })
    .catch(error => {
        dispatch({
            type: PROFILE_ERROR,
            payload: error || 'Error to Load Profile'
        });
    })
}