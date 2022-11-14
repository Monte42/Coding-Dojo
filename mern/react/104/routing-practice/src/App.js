import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Item from './components/Item';
import ItemBg from './components/ItemBg';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/:item' element={<Item/>} />
        <Route path='/:item/:fontColor/:bgColor' element={<ItemBg/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
