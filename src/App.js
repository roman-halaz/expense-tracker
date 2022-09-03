import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

// const DUMMY_EXPENSES = [
//     {
//         id: 'e1',
//         title: 'Clothes',
//         amount: 94.12,
//         date: new Date(2022, 7, 14),
//     },
//     {
//         id: 'e2',
//         title: 'Bills',
//         amount: 799.49,
//         date: new Date(2021, 2, 12)
//     },
//     {
//         id: 'e3',
//         title: 'Wheels',
//         amount: 294.67,
//         date: new Date(2021, 2, 28),
//     },
//     {
//         id: 'e4',
//         title: 'Phone',
//         amount: 450,
//         date: new Date(2020, 5, 12),
//     },
// ];

//
// for (let i = 0; i <1000; i++) {
//     let temp = {}
//     temp['id'] = i;
//     temp['title'] = 'item ' + i;
//     temp['amount'] = i + 1;
//     temp['date'] = new Date(2022,3,2)
//     DUMMY_EXPENSES.push(temp);
//     console.log(DUMMY_EXPENSES)
// }

const App = () => {
    const [expenses, setExpenses] = useState([]);
    const handleAddExpense = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    const handleDelete = (expense) => {
        setExpenses(expense)
    }

    return (
        <div>
            <NewExpense onAddExpense={handleAddExpense}/>
            <Expenses items={expenses}
                      onDelete={handleDelete}
            />
        </div>
    );
};

export default App;
