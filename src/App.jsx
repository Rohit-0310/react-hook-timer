import logo from './logo.svg';
import './App.css';
import { Timer } from './components/Timer';
import { useState } from 'react';

function App() {
    const [stop, setStop] = useState(true)
  return (
    <div className="App">
      {stop ? <Timer /> : null}
      <button onClick={() => setStop(!stop)}>{stop ? "Stop" : "Start"}</button>
    </div>
  );
}

export default App;
