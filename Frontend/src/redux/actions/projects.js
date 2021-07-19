import axios from 'axios';
import {
    PROJECTS_ERROR,
    PROJECTS_LOADED,
    PROJECTS_LOADING,
} from './types';


export default () => (dispatch) => {
    dispatch({ type: PROJECTS_LOADING });

    axios.get('/api/profile/projects/')
    .then(res => {
        dispatch({
            type: PROJECTS_LOADED,
            payload: res.data.projects || []
        });
    })
    .catch(error => {
        dispatch({
            type: PROJECTS_ERROR,
            payload: error || 'Error to Load Profile'
        });
    })
}