// Dependencies
import { combineReducers } from 'redux';
// Reducers
import { isSidebarOpen } from './reducers/sidebarReducer';
import { badge } from './reducers/badgeReducer';
import { table } from './reducers/tableReducer';

export default combineReducers({
    isSidebarOpen,
    badge ,
    table
})