import { useSelector } from "react-redux";
import "./HighScores.css";
import * as selectors from "./selectors";

export const HighScores = () => {
  const highScores = useSelector(selectors.getHighScores);

  return (
    <div className="HighScores">
      <h2>High Scores</h2>
      <h3>1. {highScores[0]}</h3>
      <h3>2. {highScores[1]}</h3>
      <h3>3. {highScores[2]}</h3>
      <h3>4. {highScores[3]}</h3>
      <h3>5. {highScores[4]}</h3>
    </div>
  );
};
