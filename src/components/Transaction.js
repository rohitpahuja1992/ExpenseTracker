import React from 'react';


export const Transaction = ({ transaction }) => {

  return (
    <li>
      {transaction.currentDate} - {Math.abs(transaction.amount)} - {transaction.action}
    </li>
  )
}
