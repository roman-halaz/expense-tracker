import { Backdrop } from '@mui/material';
// import { Link } from 'react-router-dom';
import React, {
  useState, useCallback, useRef, useEffect,
} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import About from './about';
import Users from './users';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import './App.css';

// const DUMMY_EXPENSES = [
//   {
//     id: 'e1',
//     title: 'Clothes',
//     amount: 94.12,
//     date: new Date(2022, 7, 14),
//   },
//   {
//     id: 'e2',
//     title: 'Bills',
//     amount: 799.49,
//     date: new Date(2021, 2, 12),
//   },
//   {
//     id: 'e3',
//     title: 'Wheels',
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'Phone',
//     amount: 450,
//     date: new Date(2020, 5, 12),
//   },
// ];
//
// for (let i = 0; i < 5; i++) {
//   const temp = {};
//   temp.id = i;
//   temp.title = `item ${i}`;
//   temp.amount = i + 1;
//   temp.date = new Date(2022, 3, 2);
//   DUMMY_EXPENSES.push(temp);
// console.log(DUMMY_EXPENSES);
// }

// let prevCallback = null;
// let prevDeps = null;
//
// const useCallbackP = (callback, deps) => {
//     if (!Array.isArray(deps)) {
//         return callback;
//     }
//     if (prevDeps === null) { // first render
//         prevDeps = deps;
//         prevCallback = callback;
//         return callback;
//     }
//     if (prevDeps[0] === deps[0]) {
//         return prevCallback;
//     }
//     prevDeps = deps;
//     prevCallback = callback;
//     return callback;
// }

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses');
    const initialVale = JSON.parse(saved);
    return initialVale || [];
  });
  // const [count, setCount] = useState(0);
  const [titleValue, setTitleValue] = useState('');
  const [idValue, setIdValue] = useState('');
  const [open, setOpen] = useState(false);

  const handleTitleModal = useCallback((title, id) => {
    setTitleValue(title);
    setIdValue(id);
    setOpen(true);
  }, []);
  const handleInputTitle = (event) => {
    setTitleValue(event.target.value);
  };
  const handleConfirm = () => {
    const newState = expenses.map((obj) => {
      if (obj.id === idValue) {
        return { ...obj, title: titleValue };
      }
      return obj;
    });
    setExpenses(newState);
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddExpense = useCallback((expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  }, []);
  const handleDelete = useCallback((id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((item) => item.id !== id));
  }, []);
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (event) => {
      if (open && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mouseup', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mouseup', checkIfClickedOutside);
    };
  }, [open]);
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

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
      {/* <button */}
      {/*  type="button" */}
      {/*  onClick={() => { */}
      {/*    setCount(count + 1); */}
      {/*  }} */}
      {/* > */}
      {/*  Test */}
      {/*  {' '} */}
      {/*  {count} */}
      {/* </button> */}
      <div className="modal__container">
        <Backdrop
          // sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <dialog id="dialog_id" className="modal__content" ref={ref} open={open}>
            <p>
              Please enter new title:
            </p>
            <input className="modal__input" type="text" value={titleValue} onChange={handleInputTitle} />
            <div className="modal__container_button">
              <button className="modal__cancel_button" type="button" onClick={handleClose}>Cancel</button>
              <button className="modal__change_button" type="submit" onClick={handleConfirm}>Change</button>
            </div>
          </dialog>
        </Backdrop>
      </div>
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses
        items={expenses}
        onDelete={handleDelete}
        onTitleModal={handleTitleModal}
      />
    </div>
  );
};

export default App;
