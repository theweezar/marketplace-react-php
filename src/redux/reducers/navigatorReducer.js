// Reducer is something combine state and what to do with that state

export function navigatorValues(state = [], action){
    switch (action.type) {
      case 'READ': case 'read': case 'all':
          return state;
      case 'WRITE' : case 'write': 
          return action.data;
      default: 
        return state;
    }
  };
  