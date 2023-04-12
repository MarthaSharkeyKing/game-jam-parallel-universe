import "./App.css";
import { CountdownTimer } from "./GameState/CountdownTimer";
import Grid from "./Grid/Grid";
import { Scorecard } from "./Scorecard/Scorecard";
import { Restart } from "./GameState/Restart";
import { HighScores } from "./Scorecard/HighScores";

function App() {
  return (
    <div className="App">
        <div className="Menu">
          <CountdownTimer />
          <Scorecard />
          <Restart />
          <HighScores />
        </div>
        <div className="Game">
          
          <div className="gridWrapper">
            <Grid />
          </div>
          
        </div>
    </div>
  );
}

export default App;
