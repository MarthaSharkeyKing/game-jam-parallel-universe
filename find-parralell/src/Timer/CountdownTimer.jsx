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
          <h2>Game Over</h2>
        </div>
      ) : (
        <div className="TimeIndicator">
          <h2>Time remaining: {seconds}</h2>
        </div>
      )}
    </div>
  );
};
