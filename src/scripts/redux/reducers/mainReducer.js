import { combineReducers } from "redux";
import { badge } from '../../../redux/reducers/badgeReducer';
import { table } from '../../../redux/reducers/tableReducer';

const isSideBarOpenReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIDEBAR_OPEN':
            return true;
        case 'SIDEBAR_CLOSE':
            return false;
        default:
            return state;
    }
};

const isFilterOpenReducer = (state = false, action) => {
    switch (action.type) {
        case 'FILTER_OPEN':
            return true;
        case 'FILTER_CLOSE':
            return false;
        default:
            return state;
    }
}

const displayProductTileReducer = (state = 1, action) => {
    if (typeof action.type === 'object' && Number.isInteger(action.type.display)) {
        state = action.type.display;
    }
    return state;
}

const allReducers = combineReducers({
    isSideBarOpen: isSideBarOpenReducer,
    isFilterOpen: isFilterOpenReducer,
    displayProductTile: displayProductTileReducer,
    badge,
    table
});

export default allReducers;