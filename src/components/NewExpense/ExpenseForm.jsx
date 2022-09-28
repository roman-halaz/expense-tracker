import React, { useState } from 'react';
import './ExpenseForm.css';
import DefaultExpenseForm from './DefaultExpenseForm';

const ExpenseForm = (props) => {
  const { onSaveExpenseData } = props;
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [clickedDefaultForm, setClickedDefaultForm] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    let emptyTitleCondition = false;

    for (let i = 0; i < expenseData.title.length; i++) {
      if (expenseData.title[i] === ' ') {
        emptyTitleCondition = true;
      } else {
        emptyTitleCondition = false;
        break;
      }
    }

    if (emptyTitleCondition) {
      alert("Please don't write empty title.");
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
    } else {
      onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
      setClickedDefaultForm(false);
    }
  };

  const onClickedForm = () => {
    setClickedDefaultForm(true);
  };

  const cancelButtonHandler = () => {
    setClickedDefaultForm(false);
  };

  if (!clickedDefaultForm) {
    return (
      <div>
        <DefaultExpenseForm clicked={onClickedForm} />
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="Title">
              <input
                id="title"
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
                minLength="1"
                maxLength="20"
                required
              />
              Title
            </label>
          </div>
          <div className="new-expense__control">
            <label htmlFor="Amount">
              <input
                id="Amount"
                type="number"
                min="0.01"
                max="9999999999"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
                required
              />
              Amount
            </label>
          </div>
          <div className="new-expense__control">
            <label htmlFor="Date">
              <input
                id="Date"
                type="date"
                min="2018-01-01"
                max="2022-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
                required
              />
              Date
            </label>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={cancelButtonHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
