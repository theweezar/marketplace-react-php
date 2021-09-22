// Reducer is something combine state and what to do with that state
const defaultTableValue = {
  txHash: "",
  action: "",
  block: "",
  age: "",
  status: "",
  from: "",
  to: "",
  value: 0,
};
export function table(state = [], action) {
  switch (action.type) {
    case "READ":
    case "read":
    case "all":
      return state;
    case "WRITE":
    case "write":
      return [...state, action.data ];
    default:
      return state;
  }
}
