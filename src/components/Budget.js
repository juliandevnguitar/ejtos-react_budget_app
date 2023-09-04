import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    let { budget } = useContext(AppContext);
   function newBudget(val) {
       budget = val;
   }
    return (
        <div className='alert alert-secondary'>
            <label htmlFor="numero">Budget:</label>
            <input type="number" id="numero" name="numero" min="0" max="20000" step="10" value={budget} onChange={(event) => newBudget(event.target.value)}/>

        </div>
    );
};
export default Budget;
