// ACTION must consists of `type`, and other properties
// it should be minimal
// maybe consult Flux Standard Actions https://github.com/acdlite/flux-standard-action

export const ADD_TODO              = 'ADD_TODO';
export const TOGGLE_TODO           = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}


// ACTION CREATORS are just pure function that produces (returns) ACTION.
// they are called by DISPATCHERS later like this:
// `dispatch( addTodo(text) )`

export function addTodo(text){
  return { 
    type: ADD_TODO, 
    text 
  }
}

export function toggleTodo(index){
  return { 
    type: TOGGLE_TODO, 
    index 
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}