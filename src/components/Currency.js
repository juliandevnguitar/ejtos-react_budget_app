import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Currency.css';

export default function Currency() {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const newCurrency = (event.target.value);

        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
       
    }

    return (
        <div className='currency-dropdown'>
        <label htmlFor="currency" className="dropdown-label">{currency}</label> 
        <select
            
            required='required'
            type='text'
            id='cost'
            name='currency'
            value={currency}
            onChange={handleCurrencyChange}>

            <option value="$">$ Dollar</option> 
            <option value="£">£ Pound</option> 
            <option value="€">€ Euro</option> 
            <option value="₹">₹ Ruppee</option>  
        </select>
        </div>
        
    )
}