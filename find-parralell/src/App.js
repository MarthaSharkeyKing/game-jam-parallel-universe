import "./App.css";
import { CountdownTimer } from "./GameState/CountdownTimer";
import Grid from "./Grid/Grid";
import { Scorecard } from "./Scorecard/Scorecard";
import { Restart } from "./GameState/Restart";
import { HighScores } from "./Scorecard/HighScores";

function App() {
  return (
    <div className="App">
      <header className="App-header">Close the parallel universes!</header>
      <body>
        <div className="Menu">
          <Scorecard />
          <Restart />
          <HighScores />
        </div>
        <div className="Game">
          <CountdownTimer />
          <Grid />
        </div>
      </body>
    </div>
  );
}

export default App;
