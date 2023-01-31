import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { GlobalContext } from '../context/GlobalContext';

const AddTransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const {transactions,addTransaction} = useContext(GlobalContext);
    // const lastTransactionId = transactions[transactions.length - 1].id;
    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn" onClick={
                    (e) => {
                        e.preventDefault();
                        if(text && amount){
                            addTransaction({
                                id: Math.floor(Math.random() * 100000000),
                                text:text,
                                amount:parseInt(amount)
                            })
                        }else{
                            alert('Please fill all the input fields')
                        }
                    }}
                >Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction