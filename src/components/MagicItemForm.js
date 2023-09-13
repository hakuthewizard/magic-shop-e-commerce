import './MagicItemForm.css';
import Input from './Input';
import { useRef, useState } from 'react';

const MagicItemForm = (props) => {
    const [amountIsValid,setAmountIsValid] =useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || 
        enteredAmountNumber <1 ||
        enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form className='magic-item-form' onSubmit={submitHandler}>
            <Input 
            ref={amountInputRef}
            input={
            {
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
            }}/>
          <button className='magic-add-to-cart'>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    )
}
export default MagicItemForm;