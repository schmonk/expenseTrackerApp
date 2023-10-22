import Expenses from "./components/Expenses";
function App() {
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
