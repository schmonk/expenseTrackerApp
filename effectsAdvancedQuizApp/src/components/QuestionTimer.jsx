import { useState, useEffect } from "react";
const UPDATE_INTERVAL = 15;
export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    //timer to expire the question
    const myTimeout = setTimeout(onTimeout, timeout); //shorthand use of onTimeout function we pass

    return () => {
      clearTimeout(myTimeout);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    //update progress
    const interval = setInterval(() => {
      setRemainingTime(
        (prevRemainingTime) => prevRemainingTime - UPDATE_INTERVAL
      );
    }, UPDATE_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
