import axios from 'axios';
import {
    LANGS_LOADING,
    LANGS_LOADED,
    LANGS_ERROR,
} from './types';


export default () => (dispatch) => {
    dispatch({ type: LANGS_LOADING });

    axios.get('/api/profile/langs/')
    .then(res => {
        dispatch({
            type: LANGS_LOADED,
            payload: res.data.langs || []
        });
    })
    .catch(error => {
        dispatch({
            type: LANGS_ERROR,
            payload: error || 'Error to Load Profile'
        });
    })
}