import Header from "./components/header.jsx";
import Results from "./components/results.jsx";
import UserInput from "./components/user-input.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((previousInput) => {
      return {
        ...previousInput,
        [inputIdentifier]: Number(newValue),
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {inputIsValid && <Results input={userInput} />}
      {!inputIsValid && <p className="center">Please enter a duration greater than 0</p>}
    </>
  );
}

export default App;
