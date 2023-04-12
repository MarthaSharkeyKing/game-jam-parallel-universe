import "./App.css";
import { CountdownTimer } from "./Timer/CountdownTimer";
import Grid from "./Grid/Grid";

function App() {
  return (
    <div className="App">
      <header className="App-header">Close the Parralell universes!</header>
      <CountdownTimer initialSeconds={60} />
      <Grid />
    </div>
  );
}

export default App;
