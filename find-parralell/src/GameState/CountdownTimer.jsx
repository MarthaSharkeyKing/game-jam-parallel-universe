import { useEffect } from "react";
import "./CountdownTimer.css";
import * as actions from "./slice";
import * as selectors from "./selectors";
import { useDispatch, useSelector } from "react-redux";

export const CountdownTimer = () => {
  const dispatch = useDispatch();
  const gameOver = useSelector(selectors.getGameOver);
  const timeRemaining = useSelector(selectors.getTimeRemaining);

  useEffect(() => {
    let timerInterval = setInterval(() => {
      if (!gameOver) {
        dispatch(actions.decreaseTime());
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
      {gameOver ? (
        <div className="GameOver">
          <h2>Game Over</h2>
        </div>
      ) : (
        <div className="TimeIndicator">
          <h2>Time remaining: {timeRemaining}</h2>
        </div>
      )}
    </div>
  );
};
