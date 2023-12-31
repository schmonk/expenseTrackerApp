import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const INITIAL_EXPENSES = [
    {
      id: "e1",
      title: "CAS Admission Fee",
      amount: 9800.0,
      date: new Date(2023, 7, 14),
    },
    { id: "e2", title: "Gravelbike", amount: 2510.8, date: new Date(2023, 0, 16) },
    {
      id: "e3",
      title: "Groceries",
      amount: 32.65,
      date: new Date(2022, 9, 12),
    },
    {
      id: "e4",
      title: "IKEA furniture",
      amount: 302,
      date: new Date(2020, 9, 18),
    },
    {
      id: "e5",
      title: "Black hole",
      amount: 666,
      date: new Date(2019, 1, 1),
    },
  ];
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  // requires import React from "react";
  // takes 3 arguments
  // 1st arg: element to be created
  // if built-in HTML element: pass as string
  // 2nd arg: attributes of element as object
  // 3rd arg: content between tags of element
  // 4th + argument: whatever is deeper inside
  // return React.createElement("div", {}, React.createElement("h2", {}, "Let's get started!"),
  // React.createElement(Expenses, {items:expenses}));

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
