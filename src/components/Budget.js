import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch, expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
  

  const handleBudgetChange = (event) => {
    const newBudget = parseFloat(event.target.value);

     if (newBudget < totalExpenses) {
        alert('Cannot set the budget lower than the spending');
    }
    else if (newBudget <= 20000) {
      // Use dispatch to update the budget in the context
      dispatch({ type: 'SET_BUDGET', payload: newBudget });
    } else if (newBudget > 20000) {
        alert('Cannot set the budget higher than 20000!');
     }

   
  };

  return (
    <div className='alert alert-secondary'>
      <label htmlFor="budget">Budget:</label>
      <input
        type="number"
        id="budget"
        name="budget"
        min="0"
        max="20100"
        step="10"
        value={budget} // Set the input value to the current budget
        onChange={handleBudgetChange} // Attach the onChange handler
      />
    </div>
  );
};

export default Budget;

