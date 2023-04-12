import "./App.css";
import { CountdownTimer } from "./Timer/CountdownTimer";
import Grid from "./Grid/Grid";
import { Scorecard } from "./Scorecard/Scorecard";

function App() {
  return (
    <div className="App">
      <header className="App-header">Close the parallel universes!</header>
      <body>
        <div className="Menu">
          <Scorecard currentScore={10} />
        </div>
        <div className="Game">
          <CountdownTimer initialSeconds={60} />
          <Grid />
        </div>
      </body>
    </div>
  );
}

export default App;
