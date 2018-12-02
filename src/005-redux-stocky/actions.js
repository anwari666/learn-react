// USER actions
export const ADD_SYMBOL = 'ADD_SYMBOL'
export function addSymbol(symbol){
    return {
        type: ADD_SYMBOL,
        symbol
    }
}

export const REMOVE_SYMBOL = 'REMOVE_SYMBOL'
export function removeSymbol(symbol){
    return {
        type: REMOVE_SYMBOL,
        symbol
    }
}

export const SET_INITIAL_INVESTMENT = 'SET_INITIAL_INVESTMENT'
export function setInitialInvestment(value){
    return {
        type: SET_INITIAL_INVESTMENT,
        value
    }
}

export const SET_INITIAL_DATE = 'SET_INITIAL_DATE'
export function setInitialDate(initialDate){
    return {
        type: SET_INITIAL_DATE,
        initialDate
    }
}


/* ========================== */
// SYSTEM actions
export const FETCH_SYMBOLS = 'FETCH_SYMBOLS'
export function fetchSymbols(){
    return {
        type: FETCH_SYMBOLS,
        isFetching: true
    }
}

export const RECEIVE_SYMBOLS = 'RECEIVE_SYMBOLS'
export function receiveSymbols(symbols){
    return {
        type: RECEIVE_SYMBOLS,
        available: symbols,
        isFetching: false
    }
}

export const FETCH_CHART = 'FETCH_CHART'
export function fetchChart(symbol){
    return {
        type: FETCH_CHART,
        symbol
    }
}

export const RECEIVE_CHART = 'RECEIVE_CHART'
export function receiveChart(symbol){
    return {
        type: RECEIVE_CHART,
        symbol,
        info,
        chart,
    }
}

