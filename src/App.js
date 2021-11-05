import { LocalStorageLear } from './components/LocalStorageLear.jsx';
import './App.css';
import { useState } from 'react';
import { Clicker } from './components/Clicker.jsx';
import { Ref } from './components/Ref';
import { Timer } from './components/Timer';
import { MyTimer } from './components/MyTimer.jsx';

function App() {
  const [Iscliked, setstate] = useState(false)

  return (
    <div className="App">
      <h2>React app</h2>
      {/* <button onClick={ () => setstate(!Iscliked) } >toogle click</button>
      { Iscliked && < Clicker />}
      <Ref /> */}
      <Timer />
      <MyTimer />

    </div>
  );
}

export default App;
