import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount]= useState(0);
  const handleClick1=()=>{
    setCount(count+1);
  };
  const handleClick2=()=>{
    setCount(count-1);
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick1}>Increment</button>
      <button onClick={handleClick2}>Decrement</button>

    </div>
  );
}

export default App;
