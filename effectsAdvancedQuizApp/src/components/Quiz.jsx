import { useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompletedImg from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  // we derive/calculate this state based on the above answers state we need
  const activeQuestionIndex = userAnswers.length;

  const quizCompleted = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((previousAnswers) => {
      return [...previousAnswers, selectedAnswer];
    });
  }

  if (quizCompleted) {
    return (
      <div id="summary">
        <img src={quizCompletedImg} alt="trophy icon" />
        <h2>Quiz completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random(-0.5));

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
