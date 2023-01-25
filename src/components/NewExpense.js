import React, { useState } from 'react';
import './NewExpense.css';


function NewExpense(props){

    const [enteredDate, setDate] = useState('');
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmt, setAmt] = useState('');

    const dateHandler = (evt) => {
        setDate( () => evt.target.value);
    }

    const titleHandler = (evt) => {
        setTitle( () => evt.target.value);
    }

    const amtHandler = (evt) => {
        setAmt( () => evt.target.value);
    }

    const submitHandler = (evt) =>{
        evt.preventDefault();

        const item = {
            date: new Date(enteredDate).toLocaleDateString('en-US'),
            title: enteredTitle,
            amt: enteredAmt
        }

        props.onSubmit(item);
        props.onClick();
    }

    const onClickHandler = () => {
        props.onClick();
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="container">
                <div>
                    <label>Date: </label>
                    <input onChange={dateHandler} type="date" />
                </div>
                <div>
                    <label>Title: </label>
                    <input onChange={titleHandler} type="text" />
                </div>
                <div>
                    <label>Amount: </label>
                    <input onChange={amtHandler} type="number" />
                </div>
            </div>
            <div className='btn-class'>
                <button type="button" onClick={onClickHandler}>Cancel</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default NewExpense;