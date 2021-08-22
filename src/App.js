
import { useState } from 'react';
import './App.css';

function App() {
  let [num,setNum]=useState(0);

  const increment=()=>{
    setNum(num+1)
  }
  const decrement=()=>{
    setNum(num-1)
  }
  return(
  <div>
      <div id="main_container">
      <h1>COUNTER</h1>
      <div id="box">
      <h2>{num}</h2>
        <div id="btn_collection">
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
      
        <h6>MJ</h6>
      </div>
  </div>
  )
}

export default App;
