import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react'

function App() {
  const [data,setData] = useState()
  useEffect( () =>{
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(res => {
      return res.json()
    })
    .then(results => {
      setData(results)
      console.log(data.bpi.USD.rate);
    })
    .catch(err => {
      console.log(err);
    })
  })


  return (
    <div className="App">
      <p>{data.bpi.USD.rate}</p>
    </div>
  );
}

export default App;
