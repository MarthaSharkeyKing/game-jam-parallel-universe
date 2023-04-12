import { useDispatch } from "react-redux";
import "./Restart.css";
import * as actions from "./slice";
import * as scoreActions from "../Scorecard/slice";
import * as gridActions from "../Grid/slice";

export const Restart = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(actions.resetGame());
    dispatch(gridActions.resetGrid());
    dispatch(scoreActions.resetScore());
  };

  return (
    <div className="Restart">
      <button onClick={onClick}>New Game</button>
    </div>
  );
};
