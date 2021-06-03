import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { currentIsoDate } from '../Helpers'
import { useForm } from "react-hook-form";
export const AddTransaction = () => {
  const [amount, setAmount] = useState(0);
  const { register, formState: { errors } } = useForm({
    mode: "onBlur"
  });


  const { currentTransaction } = useContext(GlobalContext);

  const addAmount = e => {
    e.preventDefault()
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      currentDate: currentIsoDate(),
      amount: +amount,
      action: "Add"
    }

    currentTransaction(newTransaction);
  }
  const removeAmount = e => {
    e.preventDefault()
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      currentDate: currentIsoDate(),
      amount: -amount,
      action: "Remove"
    }

    currentTransaction(newTransaction);
  }

  return (
    <>
      <form>
        <div className="form-control">
          <input
          type="number"
          {...register('amount', { required: true })}
          value={amount}
          name="amount"
          className="m-auto"
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..." />
        </div>
        {errors.amount && errors.amount.type === "required" && <div className="redColor">This is required</div>}
        <button className="btn" disabled={amount == 0} onClick={addAmount}>Add</button>
        <button className="btn" disabled={amount == 0} onClick={removeAmount}>Remove</button>
      </form>
    </>
  )
}
