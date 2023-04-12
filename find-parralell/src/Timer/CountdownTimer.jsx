import { useEffect, useState } from "react";
import "./CountdownTimer.css";

export const CountdownTimer = ({ initialSeconds = 0 }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let timerInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(timerInterval);
      }
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  });

  return (
    <div className="CountdownTimer">
      {seconds === 0 ? (
        <div className="GameOver">
          <h1>Game Over</h1>
        </div>
      ) : (
        <div className="TimeIndicator">
          <h1>Time remaining:</h1>
          <h2>{seconds}</h2>
        </div>
      )}
    </div>
  );
};
