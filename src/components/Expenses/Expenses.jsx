import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const {
    onDelete, items, onTitleModal,
  } = props;
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // console.log(new Date(items[1].date.toISOString()));
  // console.log(items[1].date);
  // // :DDD
  const filteredExpenses = items.filter(
    (expense) => new Date(expense.date).getFullYear().toString() === filteredYear,
  );
  // console.log(filteredExpenses, 'filter');
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList
          items={filteredExpenses}
          onDelete={onDelete}
          onTitleModal={onTitleModal}
        />
      </Card>
    </div>
  );
};

export default Expenses;
