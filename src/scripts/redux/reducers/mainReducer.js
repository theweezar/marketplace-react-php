import { combineReducers } from "redux";

const isSideBarOpenReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIDEBAR_OPEN':
            return true;
        case 'SIDEBAR_CLOSE':
            return false;
        default:
            return false;
    }
    // return typeof action.type === 'boolean' ? action.type : false;
};

const allReducers = combineReducers({
    isSideBarOpen: isSideBarOpenReducer
});

export default allReducers;