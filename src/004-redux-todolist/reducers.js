// REDUCER are pure functions with 2 arguments: previousState & action.
// Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.
// never: mutate its arguments. instead, return new instance of the state.
// never: perform side effects like calling API
// never: call non-pure functions, like `Date.now()` or `Math.random()`


import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'
import { combineReducers } from 'redux'

const { SHOW_ALL } = VisibilityFilters

function todos(state = [], action){

  switch (action.type){

    case ADD_TODO :
      return state.concat(
                {
                  text: action.text,
                  completed: false
                }
              )

    case TOGGLE_TODO : 
      return state.map( (todo, index) => {
                  if (index === action.index) 
                    return { ...todo,  completed: !todo.completed  }

                  return todo;
                })

    default :
    return state;

  }
}

// const { SHOW_ALL } = VisibilityFilters;
function visibilityFilter(state = SHOW_ALL, action){
  
  switch (action.type) {
  
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default :
      return state;
  }
}


const todoApp = combineReducers({
    todos,
    visibilityFilter
  })
export default todoApp;
