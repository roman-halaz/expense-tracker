// import { Backdrop } from '@mui/material';
import React, {
  useState, useCallback, useEffect,
} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import About from './about';
import Users from './users';
// import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import ExpenseForm from './components/NewExpense/ExpenseForm';
import ChangeTitleModal from './components/ChangeTitleModal';
import './App.css';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Clothes',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: 'e2',
    title: 'Bills',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Wheels',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Phone',
    amount: 450,
    date: new Date(2020, 5, 12),
  },
];

for (let i = 0; i < 5; i++) {
  const temp = {};
  temp.id = i;
  temp.title = `item ${i}`;
  temp.amount = i + 1;
  temp.date = new Date(2022, 3, 2);
  DUMMY_EXPENSES.push(temp);
  // console.log(DUMMY_EXPENSES);
}

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const cachedExpense = localStorage.getItem('expenses');
    const initialVale = JSON.parse(cachedExpense);
    return initialVale || DUMMY_EXPENSES;
  });

  const [titleValue, setTitleValue] = useState('');
  const [idValue, setIdValue] = useState('');
  const [open, setOpen] = useState(false);

  const handleChangeTitleModalOpen = useCallback((title, id) => {
    setTitleValue(title);
    setIdValue(id);
    setOpen(true);
  }, []);

  // const handleTitleChange = (event) => {
  //   setTitleValue(event.target.value);
  // };
  // const handleSubmit = () => {
  //   const newExpense = expenses.map((obj) => {
  //     if (obj.id === idValue) {
  //       return { ...obj, title: titleValue };
  //     }
  //     return obj;
  //   });
  //   setExpenses(newExpense);
  //   setOpen(false);
  // };
  // const handleChangeTitleModalClose = () => {
  //   setOpen(false);
  // };
  const handleAddExpense = useCallback((expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  }, []);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    handleAddExpense(expenseData);
  };
  const handleDelete = useCallback((id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((item) => item.id !== id));
    console.log(DUMMY_EXPENSES);
    console.log(expenses);
  }, []);
  // const ref = useRef();
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (open && !ref.current.contains(event.target)) {
  //       setOpen(false);
  //     }
  //   };
  //   document.addEventListener('mouseup', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mouseup', handleClickOutside);
  //   };
  // }, [open]);
  const onSetTitleValue = (event) => {
    setTitleValue(event);
  };
  const onSetExpenses = (event) => {
    console.log('onSetExpenses');
    setExpenses(event);
  };
  const onSetOpen = (event) => {
    setOpen(event);
  };
  useEffect(() => {
    window.addEventListener('beforeunload', (e) => {
      console.log(e);
      // e.preventDefault();
      // e.returnValue = 'are u';
      localStorage.setItem('expenses', JSON.stringify(expenses));
    });
  }, [expenses]);

  // window.addEventListener('beforeunload', (e) => {
  //   e.preventDefault();
  //   e.returnValue = '';
  // });
  // useEffect(() => {
  //   localStorage.setItem('expenses', JSON.stringify(expenses));
  // }, [expenses]);
  console.log(DUMMY_EXPENSES);
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="about" element={<About />} />
            <Route path="users" element={<Users />} />
          </Routes>
        </div>
      </Router>
      <ChangeTitleModal
        expenses={expenses}
        idValue={idValue}
        titleValue={titleValue}
        open={open}
        onSetTitleValue={onSetTitleValue}
        onSetOpen={onSetOpen}
        onSetExpenses={onSetExpenses}
      />
      {/* <div className="modal__container"> */}
      {/*  <Backdrop */}
      {/*    // sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} */}
      {/*    open={open} */}
      {/*  > */}
      {/*    <dialog id="dialog_id" className="modal__content" ref={ref} open={open}> */}
      {/*      <p> */}
      {/*        Please enter new title: */}
      {/*      </p> */}
      {/*      <input className="modal__input" type="text" value={titleValue}
       onChange={handleTitleChange} /> */}
      {/*      <div className="modal__container_button"> */}
      {/*        <button className="modal__cancel_button" type="button"
      onClick={handleChangeTitleModalClose}>Cancel</button> */}
      {/*        <button className="modal__change_button" type="submit"
      onClick={handleSubmit}>Change</button> */}
      {/*      </div> */}
      {/*    </dialog> */}
      {/*  </Backdrop> */}
      {/* </div> */}
      {/* <NewExpense onExpenseAdd={handleAddExpense} /> */}
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
      <Expenses
        items={expenses}
        onDelete={handleDelete}
        onChangeTitleModalOpen={handleChangeTitleModalOpen}
      />
    </div>
  );
};

export default App;
