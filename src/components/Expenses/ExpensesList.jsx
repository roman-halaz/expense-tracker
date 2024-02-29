import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  const {
    onDelete, items, onChangeTitleModalOpen,
  } = props;
  if (!items.length) {
    return <p className="expenses-list__fallback">Found no expenses.</p>;
  }
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
          onChangeTitleModalOpen={onChangeTitleModalOpen}
        />
      )))}
    </ul>
  );
};

export default ExpensesList;
