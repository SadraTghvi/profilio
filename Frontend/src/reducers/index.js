import { combineReducers } from 'redux';
import profile from './profile'
import projects from './projects'

export default combineReducers({
    profile,
    projects,
});