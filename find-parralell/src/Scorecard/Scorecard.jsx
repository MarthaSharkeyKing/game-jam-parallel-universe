import "./Scorecard.css";
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from './selectors'

export const Scorecard = () => {
  const currentScore = useSelector(selectors.getScore)
  return (
    <div className="Scorecard">
      <h2>Score: {currentScore}</h2>
    </div>
  );
};
