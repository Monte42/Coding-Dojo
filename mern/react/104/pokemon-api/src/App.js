import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  const [pokemonList,setPokemonList] = useState([])
  
  useEffect(() => {
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    //   .then(res => res.json())
    //   .then(response => setPokemonList(response.results))
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then(respone => setPokemonList(respone.data.results))
  },[])

  return (
    <div className="App">
      <h1>Fetch Pokemon</h1>
      <ul style={{width:"fit-content", margin:"0 auto"}}>
        {pokemonList.map((poke, i) => <li key={i}>{poke.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
