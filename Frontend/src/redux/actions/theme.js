import axios from 'axios';
import {
    THEME,
} from './types';

var csrfToken = document.currentScript.getAttribute('csrfToken');

const config = {
    headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken
    },
};

export default (toggle = false) => (dispatch) => {
    axios.post('/api/profile/theme/', {'toggle': toggle}, config)
    .then(res => {
        if (res.data.theme) {
            dispatch({
                type: THEME,
                payload: res.data.theme,
            })
        }
    }).catch(error => {
        console.log(error);
    })
}