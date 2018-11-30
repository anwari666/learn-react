// STORES brings ACTIONS & REDUCERS together.
// there's only one single STORE in redux app
// allows access to state via getState()
// allows state to be updated via dispatch(action)
// register & deregister listener via subscribe( listener ) / unsubscribe();

import { createStore } from 'redux';
import todoApp from './reducers';

const store = createStore( todoApp )


/* REDUX's DATA FLOW:
1. I call `store.dispatch(action)`
2. Redux store calls reducer function
3. The root reducer may combine the output of multiple reducers into a single state tree
4. Redux store saves the complete state tree returned by the root reducer. *everything (all reducers) are called*

/* EXAMPLE TO TEST 



import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions'


// Log the initial state
console.log(store.getState())


// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))


// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
// Stop listening to state updates
unsubscribe()

*/