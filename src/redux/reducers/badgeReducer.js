// Reducer is something combine state and what to do with that state
const defaultBadge = { 
    keyid: "",
    name: "",
    route: "",
}
export function badge(state = defaultBadge, action){
    switch (action.type) {
      case 'READ': case 'read': case 'all':
          return state;
      case 'WRITE' : case 'write': 
          return { ...state, keyid : action.keyid, name: action.name, route: action.route };
      default: 
        return state;
    }
  };
  