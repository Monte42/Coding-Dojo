import './App.css';
import { useState } from 'react';
import BoxForm from './boxComponents/BoxForm';
import BoxDisplay from './boxComponents/BoxDisplay';

function App() {
  const [allBoxes, setAllBoxes] = useState([{color:"red",size:2}])

  const createBox = (color, size) =>{
    setAllBoxes([...allBoxes, {color:color, size:size}])
  }
  return (
    <div className="App">
      <BoxForm onNewBox={createBox}/>
      <BoxDisplay boxes={allBoxes}/>
    </div>
  );
}

export default App;
