import logo from './logo.svg';
import './App.css';
import { Timer } from './components/Timer';
import { useState } from 'react';

function App() {
    const [show, setShow] = useState(true)
  return (
    <div className="App">
      {show ? <Timer /> : null}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
