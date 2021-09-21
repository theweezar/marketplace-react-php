// Reducer is something combine state and what to do with that state

export function isSidebarOpen(state = false, action){
  switch (action.type) {
    case "SHOW":
    case "show":
    case "sh":
      return true;
    case "HIDE":
    case "hide":
    case "hd":
      return false;
    case "TOGGLE":
    case "tg":
      return !state;
    default: 
      return state;
  }
};
