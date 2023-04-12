import "./Scorecard.css";

export const Scorecard = ({ currentScore = 0 }) => {
  return (
    <div className="Scorecard">
      <h2>Score: {currentScore}</h2>
    </div>
  );
};
