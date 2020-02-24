export default (state, action) => {

    switch (action.type) {
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }

        case "LOADING_ON":
            return {
                ...state,
                loading: true
            }
        case "LOADING_OFF":
            return {
                ...state,
                loading: false
            }

        case "UPDATE_CURRENCY_LIST":
            return {
                ...state,
                currencies: action.payload
            }   
        default:
            return state;
    }
}