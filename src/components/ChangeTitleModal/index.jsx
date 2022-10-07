import React, {
  useEffect, useRef,
} from 'react';
import { Backdrop } from '@mui/material';
import './ChangeTitleModal.css';

const ChangeTitleModal = (props) => {
  const {
    expenses, idValue, titleValue, open, onSetTitleValue, onSetOpen, onSetExpenses,
  } = props;

  const handleTitleChange = (event) => {
    onSetTitleValue(event.target.value);
  };

  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !ref.current.contains(event.target)) {
        onSetOpen(false);
      }
    };
    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [open]);

  const handleSubmit = () => {
    const newExpense = expenses.map((obj) => {
      if (obj.id === idValue) {
        return { ...obj, title: titleValue };
      }
      return obj;
    });
    onSetExpenses(newExpense);
    onSetOpen(false);
  };
  const handleChangeTitleModalClose = () => {
    onSetOpen(false);
  };
  return (
    <div className="modal__container">
      <Backdrop
        open={open}
      >
        <dialog id="dialog_id" className="modal__content" ref={ref} open={open}>
          <p>
            Please enter new title:
          </p>
          <input className="modal__input" type="text" value={titleValue} onChange={handleTitleChange} />
          <div className="modal__container_button">
            <button className="modal__cancel_button" type="button" onClick={handleChangeTitleModalClose}>Cancel</button>
            <button className="modal__change_button" type="submit" onClick={handleSubmit}>Change</button>
          </div>
        </dialog>
      </Backdrop>
    </div>
  );
};

export default ChangeTitleModal;
