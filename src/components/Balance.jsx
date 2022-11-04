import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext'

const Balance = () => {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map((transaction) => transaction.amount)

    console.log('Amounts arr',amounts);

    const total = amounts.reduce((acc,item) => acc += item,0).toFixed(2);

    console.log('Total',total);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}

export default Balance