import './App.css';
import {useEffect,useState} from 'react'
import axios from 'axios'

function App() {
  const [data,setData] = useState(false)
  // Runs on page load
  useEffect( () =>{
    async function myCall () {
      try {
        const results = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        setData(results.data)
      } catch(err) {
        console.log(err);
      }
    }
    myCall()
  }, [])
  // runs on Click
  const apiCAll = async () => {
    try {
      const results = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      setData(results.data)
    } catch(err) {
      console.log(err);
    }
  }


  return (
    <div className="App">
      {
        !data ? <p>LOADING</p> : 
        <>
          <h1>Data</h1>
          
        </>
      }
      <button onClick={apiCAll}>CALL</button>
    </div> 

  );
}

export default App;
