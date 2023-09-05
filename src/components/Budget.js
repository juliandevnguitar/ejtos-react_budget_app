import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);

  const handleBudgetChange = (event) => {
    const newBudget = parseFloat(event.target.value);

    if (!isNaN(newBudget)) {
      // Use dispatch to update the budget in the context
      dispatch({ type: 'SET_BUDGET', payload: newBudget });
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
        max="20001"
        step="10"
        value={budget} // Set the input value to the current budget
        onChange={handleBudgetChange} // Attach the onChange handler
      />
    </div>
  );
};

export default Budget;

