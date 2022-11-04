import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'

const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map((transaction) => transaction.amount)

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc,item) => (acc += item),0)
    .toFixed(2)


    const expense = (amounts
    .filter(item => item < 0)
    .reduce((acc,item) => (acc+=item),0)) * -1
    .toFixed(2);

    console.log('Income',income);
    console.log('Expense',expense);
    return (
        <>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">+$0.00</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="money minus">-$0.00</p>
                </div>
            </div>
        </>
    )
}

export default IncomeExpenses