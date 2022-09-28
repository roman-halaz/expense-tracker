import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  const {
    onDelete, items, onTitleModal,
  } = props;
  if (items.length === 0) {
    return <p className="expenses-list__fallback">Found no expenses.</p>;
  }
  console.log(items);
  return (
    <ul className="expenses-list">
      {(items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onDelete={onDelete}
          onTitleModal={onTitleModal}
        />
      )))}
    </ul>
  );
};

export default ExpensesList;
