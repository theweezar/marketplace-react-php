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
};

const isFilterOpenReducer = (state = false, action) => {
    switch (action.type) {
        case 'FILTER_OPEN':
            return true;
        case 'FILTER_CLOSE':
            return false;
        default:
            return false;
    }
}

const allReducers = combineReducers({
    isSideBarOpen: isSideBarOpenReducer,
    isFilterOpen: isFilterOpenReducer
});

export default allReducers;