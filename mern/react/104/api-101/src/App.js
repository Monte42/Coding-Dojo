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
    let max = 100000000
    return new Promise((resolve, reject) => {
      while(headCount<25){
        let val = tossCoin()
        attempts++
        if(val === "heads") {
          headCount++
        } else {
          headCount=0
        }
      }
      if (attempts <= max) {
        resolve(`It took ${attempts} to get 25 heads in a row`)
      } else {
        reject(`Max(${max}) Attempts Exceeded`)
      }
    })
  }

  const handleRequest = () => {
    fiveHeads()
      .then(res => {console.log(res); setMsg(res)})
      .catch(err => {console.log(err); setMsg(err)});
    console.log("Loading...");
  }

  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={handleRequest}>Click Me</button>
      {
        msg ? <p>{msg}</p> : <p>Click Button</p>
      }
    </div>
  );
}

export default App;
