import './App.css';
import { useState } from 'react';
import BoxForm from './boxComponents/BoxForm';
import BoxDisplay from './boxComponents/BoxDisplay';

function App() {
  const [allBoxes, setAllBoxes] = useState([{color:"red",size:2}])
  const [numOfBoxes, setNumOfBoxes] = useState(1)

  const createBox = (color, size) =>{
    let newBoxSet = allBoxes
    newBoxSet.push({color:color,size:size})
    setAllBoxes(newBoxSet)
    setNumOfBoxes(numOfBoxes+1)
  }
  return (
    <div className="App">
      <BoxForm onNewBox={createBox}/>
      <BoxDisplay boxes={allBoxes}/>
    </div>
  );
}

export default App;
