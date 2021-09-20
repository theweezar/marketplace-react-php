import { combineReducers } from "redux";

const isSideBarOpenReducer = (state = false, action) => {
    return typeof action.type === 'boolean' ? action.type : false;
};

const currentDropdownReducer = (state = "", action) => {
    return action.type !== "@@INIT" ? action.type : "";
}

const allReducers = combineReducers({
    isSideBarOpen: isSideBarOpenReducer,
    currentDropdown: currentDropdownReducer
});

export default allReducers;