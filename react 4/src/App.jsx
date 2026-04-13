import './App.css';
import { useState } from 'react';
import List from './List';
import Dashboard from './Dashboard';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="div1">
      <h1>ASHU</h1>
      <p>Welcome everyone!</p>
      <h2>{count}
        {count == 10 && <h3>Target reached!</h3>}
      </h2>

      <div>
        <button style={{ backgroundColor: 'red' }} onClick={() => count > 0 && setCount(count - 1)}>-</button>
        <button style={{ backgroundColor: 'green' }} onClick={() => count < 10 && setCount(count + 1)}>+</button>
        <button onClick={(() => setCount(0))}>Reset</button>
      </div>
      <div>
        <List />
        <Dashboard />
      </div>
    </div >
  )
}

export default App;