import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import NewExpenseButton from "../Expenses/NewExpenseButton";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isCreating, setIsCreating] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const handleCreateNewExpense = () => {
    console.log("beep");
    setIsCreating(true);
  };

  const handleStopCreating = () => {
    setIsCreating(false);
  };

  return (
    <div className="new-expense">
      {isCreating ? (
        <ExpenseForm onClick={handleStopCreating} onSaveExpenseData={saveExpenseDataHandler} />
      ) : (
        <NewExpenseButton onClick={handleCreateNewExpense} />
      )}
    </div>
  );
};

export default NewExpense;
