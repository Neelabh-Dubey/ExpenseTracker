import React, { useState } from "react";
import NewExpense from "./NewExpense";
import "./AddExpense.css";

function AddExpense(props) {
  const [flag, setFlag] = useState(false);

  const onClickHandler = () => {
    setFlag((prevState) => !prevState);
  };

  return (
    <div>
      {flag === false ? (
        <div className="add-expense" onClick={onClickHandler}>
          Add Expense
        </div>
      ) : (
        <NewExpense onSubmit={props.onSubmit} flag={flag} onClick={onClickHandler}/>
      )}
    </div>
  );
}

export default AddExpense;
