// Reducer is something combine state and what to do with that state
import TableAction from '../actions/tableAction';

const defaultTableValue = {
  // Records
  records: TableAction.generate(15),
  
  // Pagination
  page: 1,
  perPage: 10,
  numberofPage: 0,
};
export const table = (state = defaultTableValue, action) => {
  switch (action.type) {
    case "READ_TABLE":
    case "read_table":
    case "all_table":
      return state; 
    case "WRITE_TABLE":
    case "write_table":
      return state;
    default:
      return {...state, numberofPage: TableAction.calcNoP( state.records.length, state.perPage) };
  }
};
