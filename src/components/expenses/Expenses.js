import React, { useState } from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterPickedHandler = (year) => {
    setFilteredYear(year);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  let expensesContent =<p> no expenses !</p>
  if(filteredExpenses.length>0)
  {
     expensesContent=filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterPicked={filterPickedHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
       <ExpensesList items={filteredExpenses}/>
  
    
    </Card>
  );
};

export default Expenses;
