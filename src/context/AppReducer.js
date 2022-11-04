
export default (state,action) => {
    switch(action.type){
        case "ADD_TRANSACTION":
            console.log('Add Transaction payload',action.payload);
            return {
                transactions:[...state.transactions,action.payload]
            }
        case "DELETE_TRANSACTION":
            console.log('Delete transaction',state);
            return {
                transactions: state.transactions.filter((transaction) => transaction.id !== action.payload)
            }
        default:
            return state;
    }
}