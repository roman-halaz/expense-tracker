import React from "react";
import './DefaultExpenseForm.css';


const DefaultExpenseForm = (props) => {
    const DefaultExpenseFormHandler = () => {
        props.clicked();
    }

    return (
        <div className='new-expense__add'>
            <button onClick={DefaultExpenseFormHandler}>Add New Expense</button>
        </div>
    );
}

export default DefaultExpenseForm;