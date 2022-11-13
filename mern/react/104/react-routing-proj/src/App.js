import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About';
import Results from './components/Results';
import City from './components/City';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/results" element={<Results/>} />
          <Route path="/location/:state/:city" element={<City/>} />
        </Routes>
        <p>
            <Link to={"/location/washington/seattle"}>Seattle</Link> |
            <Link to={"/location/illions/chicago"}>Chicago</Link> |
            <Link to={"/location/california/burbank"}>Burbank</Link> |
          </p>
      </div>
    </BrowserRouter>
  );
}

export default App;
