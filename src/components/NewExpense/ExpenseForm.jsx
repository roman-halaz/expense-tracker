import React, { useState, memo } from 'react';
import './ExpenseForm.css';
import DefaultExpenseForm from './DefaultExpenseForm';

const ExpenseForm = (props) => {
  const { onSaveExpenseData } = props;
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [isShown, setIsShown] = useState(false);
  const maxDay = new Date().toISOString().split('T')[0];

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title,
      amount: Number(amount),
      date: new Date(date),
    };
    let isTitleValid;

    // for (let i = 0; i < expenseData.title.length; i++) {
    //   if (expenseData.title[i] === ' ') {
    //     isTitleValid = true;
    //   } else {
    //     break;
    //   }
    // }

    if (isTitleValid) {
      alert("Please don't write empty title.");
    } else {
      onSaveExpenseData(expenseData);
      setTitle('');
      setAmount('');
      setDate('');
      setIsShown(false);
    }
  };

  const showForm = () => {
    setIsShown(true);
  };

  const hideForm = () => {
    setIsShown(false);
  };

  if (!isShown) {
    return (
      <div>
        <DefaultExpenseForm onShow={showForm} />
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="Title">
              <input
                id="title"
                type="text"
                value={title}
                onChange={handleTitleChange}
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
                value={amount}
                onChange={handleAmountChange}
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
                max={maxDay}
                value={date}
                onChange={handleDateChange}
                required
              />
              Date
            </label>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={hideForm}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default memo(ExpenseForm);
