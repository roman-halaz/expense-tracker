import React from "react";
import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <p className="expenses-list__fallback">Found no expenses.</p>
    }
    const handleDelete = (id) => {
        const newList = props.expenseData.filter((item) => item.id !== id)
        props.onDelete(newList)
    }

    return <ul className="expenses-list">
        {(props.items.map((expense) => (
            <ExpenseItem
                id={expense.id}
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                onDelete={handleDelete}
            />
        )))}
    </ul>
}

export default ExpensesList;