import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => { 
  const [count, setCount] = useState(1);
  
  useEffect(() => { 
    document.title = `Count: ${count} | React Counter App`;
  }, [count]);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleReset = () => {
    setCount(1);
  };

  return ( 
    <div className="app">
      <div className="counter-container">
        <h1 className="counter-title" style={{ color: '#FF8C00' }}>Counter App</h1>
        <div className="counter-display">
          <span className="counter-number">{count}</span>
        </div>
        <div className="button-group">
          <button 
            className="counter-button increment" 
            onClick={handleIncrement}
          >
            Increment
          </button> 
          <button 
            className="counter-button reset"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
