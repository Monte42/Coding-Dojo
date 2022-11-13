import './App.css';
import {useState} from 'react'

function App() {
  const [msg,setMsg] = useState("")


  function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails"
  }

  function fiveHeads() {
    let headCount = 0
    let attempts = 0
    let max = 100
    return new Promise((resolve, reject) => {
      while(headCount<5){
        let val = tossCoin()
        attempts++
        if(val === "heads") {
          headCount++
        } else {
          headCount=0
        }
      }
      if (attempts <= max) {
        
        resolve(`It took ${attempts} to get 20 heads in a row`)
      } else {
        reject(`Max(${max}) Attempts Exceeded`)
      }
    })
  }

  const handleRequest = () => {
    fiveHeads()
      .then(res => setMsg(res))
      .catch(err => setMsg(err));
  }

  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={handleRequest}>Click Me</button>
      {
        msg ? <p>{msg}</p> : ""
      }
    </div>
  );
}

export default App;
