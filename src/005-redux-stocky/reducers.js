import { combineReducers } from 'redux'
import { ADD_SYMBOL, REMOVE_SYMBOL, FETCH_SYMBOLS, RECEIVE_CHART, RECEIVE_SYMBOLS } from './actions';

const selectedSymbols = (state = [], action) => {
    switch ( action.type) {
        
    }
}

const symbols = (state, action) => {
    switch ( action.type ){
        case FETCH_SYMBOLS :
            return Object.assign({}, 
                    ...state, 
                    { isFetching: action.isFetching })
        case RECEIVE_SYMBOLS :
            return Object.assign({},
                    ...state,
                    { 
                        available: action.available, 
                        isFetching: action.isFetching
                    })
        case ADD_SYMBOL :
            return Object.assign({}, 
                    ...state, 
                    { selected: state.selected.concat( action.symbol ) });
        case REMOVE_SYMBOL:
            return Object.assign({}, 
                    ...state, 
                    { selected: state.selected.reduce( (acc, val) => (
                            val === action.symbol ? 
                                acc.concat(val) :
                                acc.concat()
                        ), []) });
        default:
            return state
    }
}

const initialInvestment = (state = 10000, action) {
    switch (action.type) {
        case SET_INITIAL_INVESTMENT :
            return action.value
        default :
            return state
    }
}

const initialDate = (state, action) {
    switch (action.type) {
        case SET_INITIAL_DATE :
            return new Date( action.month+'/01/'+action.year ).getTime()
        default :
            return state
    }
}

const stockySkeleton = combineReducers({
    symbols,
    initialInvestment,

})

export default stockySkeleton