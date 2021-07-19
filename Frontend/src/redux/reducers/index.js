import { combineReducers } from 'redux';

import profile from './profile'
import projects from './projects'
import langs from './langs'
import theme from './theme'


export default combineReducers({
    profile,
    projects,
    langs,
    theme,
});