import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const handleDelete = () => {
        props.onDelete(props.id);
    }

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date}/>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                <div className='expense-item__delete__container'>
                    <button type='button' className='expense-item__delete__button' onClick={handleDelete}>
                        <span className='expense-item__delete__click'>&times;</span>
                    </button>
                </div>
            </Card>
        </li>);
}

export default ExpenseItem;
