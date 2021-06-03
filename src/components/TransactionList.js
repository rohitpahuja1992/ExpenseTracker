import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  let { transactions } = useContext(GlobalContext);
  transactions = transactions.filter(item => item.amount !== 0 ) 

  return (
    <>
      <h3>Transaction: </h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
