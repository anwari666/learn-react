const initialState = {
    symbols: {
        available: [],
        isFetching: false,
        selected: []
    },
    stocks: [{
        id: 1,
        symbol: 'aapl',
        info: { }, // stock info object
        chart: [{
            date: 123098235425345,
            value: 120
        }]
    }],
    initialInvestment: 25000,
    initialDate: 123098235425345, // timestamp
    portfolio: [{
        symbol: 'aapl',
        share: 100,
        chart: [{
            date: 123098235425345,
            boughtShare: 70.2767,
            totalShare: 180.382
        }],
        totalValue: 328000 // total lembar * value
    }]
}

export default initialState;

// formulas: