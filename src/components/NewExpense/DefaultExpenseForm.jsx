import React from 'react';
import './DefaultExpenseForm.css';

const DefaultExpenseForm = (props) => {
  const { onShow } = props;

  return (
    <button className="new-expense__button" type="button" onClick={() => onShow()}>Add New Expense</button>

  );
};

export default DefaultExpenseForm;
