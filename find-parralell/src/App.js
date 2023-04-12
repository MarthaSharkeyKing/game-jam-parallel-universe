import "./App.css";
import { CountdownTimer } from "./GameState/CountdownTimer";
import Grid from "./Grid/Grid";
import { Scorecard } from "./Scorecard/Scorecard";
import { Restart } from "./GameState/Restart";

function App() {
  return (
    <div className="App">
        <div className="Menu">
          <Scorecard />
          <Restart />
        </div>
        <div className="Game">
          <CountdownTimer />
          <div className="gridWrapper">
            <Grid />
          </div>
          
        </div>
    </div>
  );
}

export default App;
