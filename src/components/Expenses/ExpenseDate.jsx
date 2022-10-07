import React, { useMemo } from 'react';

import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const { date } = props;
  const processedDate = new Date(date);
  // const dateStorage = {
  //   month: dateData.toLocaleString('en-US', { month: 'long' }),
  //   day: dateData.toLocaleString('en-US', { day: '2-digit' }),
  //   year: dateData.getFullYear(),
  // };
  const { day, month, year } = useMemo(() => ({
    day: processedDate.toLocaleString('en-US', { day: '2-digit' }),
    month: processedDate.toLocaleString('en-US', { month: 'long' }),
    year: processedDate.getFullYear(),
  }), [processedDate]);
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
