import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [formVisible, setFormVisible] = useState(false);

  /* const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); */
  const titleChangeHandler = (event) => {
    console.log("event titleChangeHandler");
    setEnteredTitle(event.target.value);
    /*  setUserInput({
      ...userInput,
       setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
    }); */
    /*  setUserInput = (prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    }; */
  };
  const amountChangeHandler = (event) => {
    console.log("event amountChangeHandler");
    setEnteredAmount(event.target.value);
    /*   setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    }); */
    /*   setUserInput = (prevState) => {
        return { ...prevState,  enteredAmount: event.target.value };
      }; */
  };

  const dateChangeHandler = (event) => {
    console.log("event dateChangeHandler");
    setEnteredDate(event.target.value);
    /*  setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    }); */

    /*  setUserInput = (prevState) => {
        return { ...prevState,  enteredDate: event.target.value };
      }; */
  };
  const submitHandler = (event) => {
    console.log("event submitHandler");
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const showFormahandler = (event) => {
    setFormVisible(true);
  };

  const hideFormahandler = (event) => {
   
    setFormVisible(false);
  };
  if (formVisible === false)
    return (
      <div className="new-expense__actions">
        <button onClick={showFormahandler}>Add new Expense</button>{" "}
      </div>
    );
  else {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-21-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={hideFormahandler}>Cancel</button>{" "}
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
};

export default ExpenseForm;
