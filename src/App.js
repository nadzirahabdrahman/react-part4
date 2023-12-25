import './App.css';
import { useState } from 'react';

function App() {
  // Using Javascript
  // const incrementValue = () => {
  //   // console.log(document.getElementById('number').innerText);
  //   document.getElementById('number').innerText = Number.parseInt(document.getElementById('number').innerText)+1;
  // }

  // Using React 
  const [counter, setCounter] = useState(0); //initialize 0 value for counter, cannot use inside for loop or if else statement

  const incrementValue = () => {
    setCounter(counter + 1); // setCounter for counter will be increment of 1 
    
  }

  const decrementValue = () => {
    setCounter(counter - 1); // setCounter for counter will be decrement by 1 
  }
  return (
    <>
      <div>
        <h1>Studywith me React pt.4</h1>
      </div>

      {/* Using Javascript */}
      {/* <div className='card flex-apart'>
        <span id='number'>0</span>
        <button onClick={incrementValue}>+</button>
      </div> */}

      {/* Using React */}
      <div className='card flex-apart'>
        <button onClick={decrementValue}>-</button>
        <span id='number'>$ {counter}</span>
        <button onClick={incrementValue}>+</button>
      </div>
    </>
    
  );
}

export default App;
