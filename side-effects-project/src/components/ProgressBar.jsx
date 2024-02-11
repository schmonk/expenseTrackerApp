import { useState, useEffect } from "react";

const UPDATEFREQUENCY = 20;

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("beep");
      setRemainingTime((previousTime) => previousTime - UPDATEFREQUENCY);
    }, UPDATEFREQUENCY);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
