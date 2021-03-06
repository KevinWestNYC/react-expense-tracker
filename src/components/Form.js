import React, { useState } from 'react'
import { nanoid } from 'nanoid';

export default function Form({expenses, setExpenses}) {
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
        
    const handleFormSubmit = (e) => {
        e.preventDefault();
    
        const newExpense = {
          id: nanoid(),
          date: formatDate(date),
          location: location,
          description: description,
          amount: amount
        };
        
        setExpenses([...expenses, newExpense])
        resetForm();
      }

      const formatDate = (dateInput) => {
        let date = new Date(dateInput);
        const options = {
            dateStyle: 'full',
            timeZone: 'UTC'
        };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }
    
      const resetForm = () => { 
        setDate('');
        setLocation('');
        setDescription('');
        setAmount('');
      };

    return (
    <form id="expense-form" onSubmit={handleFormSubmit}>
       <input
       type="date"
       name="date"
       value={date}
       required="required"
       onChange={(e) => setDate(e.target.value)}
       />
       <input
       type="text"
       name="location"
       value={location}
       required="required"
       placeholder="Location"
       onChange={(e) => setLocation(e.target.value)}
       />
       <input
       type="text"
       name="description"
       value={description}
       required="required"
       placeholder="Description of Expense"
       onChange={(e) => setDescription(e.target.value)}
       />
       <input
       type="number"
       name="amount"
       value={amount}
       required="required"
       placeholder="How Much?"
       min="0" 
       step=".01"
       onChange={(e) => setAmount(e.target.value)}
       />
      <button type="submit">Add Expense</button>
    </form>
    )
}

