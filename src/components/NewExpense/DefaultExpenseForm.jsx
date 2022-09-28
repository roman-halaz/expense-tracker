import React from 'react';
import './DefaultExpenseForm.css';

const DefaultExpenseForm = (props) => {
  const { clicked } = props;
  const DefaultExpenseFormHandler = () => {
    clicked();
  };
  return (
    <button className="new-expense__button" type="button" onClick={DefaultExpenseFormHandler}>Add New Expense</button>

  );
};

export default DefaultExpenseForm;
