import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
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
      amount: 45.65,
      date: new Date(2023, 9, 21),
    },
    {
      id: "e4",
      title: "IKEA furniture",
      amount: 302,
      date: new Date(2023, 9, 18),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js ");
    console.log(expense);
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
