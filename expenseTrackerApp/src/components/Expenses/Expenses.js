import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  let filterInfoText = "2019, 2021 & 2022";

  if (filteredYear === "2019") {
    filterInfoText = "2020, 2021 & 2022";
  } else if (filteredYear === "2021") {
    filterInfoText = "2019, 2020 & 2022";
  } else if (filteredYear === "2022") {
    filterInfoText = "2019, 2020 & 2021";
  }
  const filterChangeHandler = (selectedYear) => {
    console.log("expenses.js");
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.items.map((expense) => (
          <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
        ))}
        <p>Data for years {filterInfoText} is hidden.</p>
      </Card>
    </div>
  );
};

export default Expenses;
