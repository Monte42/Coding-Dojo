import './App.css';
import {useEffect,useState} from 'react'
import axios from 'axios'

function App() {
  const [data,setData] = useState(false)
  useEffect( () =>{
    async function myCall () {
      try {
        const results = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        setData(results.data)
      } catch(err) {
      }
    }
    myCall()
  }, [])

  const apiCAll = async () => {
    try {
      const results = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      setData(results.data)
    } catch(err) {
      console.log(err);
    }
  }
  
  console.log("data: ",data);

  return (
    <div className="App">
      {
        !data ? <p>LOADING</p> : 
        <>
          <h1>{data.chartName}</h1>
          <h3>{data.bpi.USD.code} ${data.bpi.USD.rate}</h3>
          <h3>{data.bpi.GBP.code} ${data.bpi.GBP.rate}</h3>
          <h3>{data.bpi.EUR.code} ${data.bpi.EUR.rate}</h3>
          <p>{data.time.updated}</p>
        </>
      }
      <button onClick={apiCAll}>CALL</button>
    </div> 

  );
}

export default App;
