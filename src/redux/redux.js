// Dependencies
import { combineReducers } from 'redux';
// Reducers
import {isSidebarOpen} from './reducers/sidebarReducer';
import { badge } from './reducers/badgeReducer';

export default combineReducers({
    isSidebarOpen,
    badge 
})