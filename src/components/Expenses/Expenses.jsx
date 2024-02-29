import React, { useState, useCallback } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const {
    onDelete, items, onChangeTitleModalOpen,
  } = props;
  const [filteredYear, setFilteredYear] = useState('2022');
  const handleFilterChange = useCallback((selectedYear) => {
    setFilteredYear(selectedYear);
  }, []);
  // console.log(new Date(items[1].date.toISOString()));
  // console.log(items[1].date);
  // // :DDD
  // const filteredExpenses = useMemo(() => {
  const filteredExpenses = items.filter(
    (expense) => new Date(expense.date).getFullYear().toString() === filteredYear,
  );
    // return processedFilteredExpenses;
  // }, []);
  // const filteredExpenses = items.filter(
  //   (expense) => new Date(expense.date).getFullYear().toString() === filteredYear,
  // );
  // console.log(filteredExpenses);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={handleFilterChange}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList
          items={filteredExpenses}
          onDelete={onDelete}
          onChangeTitleModalOpen={onChangeTitleModalOpen}
        />
      </Card>
    </div>
  );
};

export default Expenses;
