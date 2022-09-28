import React, { memo } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const {
    onDelete, date, title, amount, id, onTitleModal,
  } = props;
  const handleDelete = () => {
    onDelete(id);
  };
  const handleTitleModal = () => {
    onTitleModal(title, id);
  };
  console.log('render');
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>
            <span>{title}</span>

            <EditIcon className="edit-icon-button" onClick={handleTitleModal} />

          </h2>
          {/* <button type="button" onClick={handleChangeTitle}>Click</button> */}
          <div className="expense-item__price">
            $
            {amount}
          </div>
        </div>
        <div className="expense-item__delete__container">
          <button type="button" className="expense-item__delete__button" onClick={handleDelete}>
            <span className="expense-item__delete__click">&times;</span>
          </button>

        </div>
      </Card>
    </li>
  );
};

export default memo(ExpenseItem);
