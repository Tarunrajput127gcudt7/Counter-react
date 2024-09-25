import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(15)
  // let counter = 15

  const addValue = () =>{
    
  //  counter = counter +1
  setcounter(counter + 1)
  // console.log("Click", counter);
  }

  const removeValue = () =>{
    setcounter (counter-1)
  }
  return (
    <>
      <div>
        <h1>Chai or react</h1>
        <h2>Counter value: {counter}</h2>

        <button onClick={addValue}>
          Add value</button>

        <button onClick={removeValue}>
          remove value</button>
      </div>
      
    </>
  )
}

export default App
