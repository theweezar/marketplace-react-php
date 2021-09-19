import { combineReducers } from "redux";

const isSideBarOpenReducer = (state = false, action) => {
    return typeof action.type === 'boolean' ? action.type : false;
};

const allReducers = combineReducers({
    isSideBarOpen: isSideBarOpenReducer
});

export default allReducers;