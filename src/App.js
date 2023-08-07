import React, { useState } from 'react';
import './App.css';
import CounterComponent from "./components/counter";
import Test from "./components/test";

function App() {
  // How to write state in functional components
   const [auth, setAuth] = useState(true); //return 2 things
   const [num, setNum] = useState(5);
   const number = 123;
  return (
      <div className="App">
        Hello World!! ,<span>{num}</span>
        <Test numX={number} />
        <button onClick={() => setAuth(!auth)}>Toggle</button>
        { auth && <CounterComponent />}
      </div>
  );
}

export default App;
