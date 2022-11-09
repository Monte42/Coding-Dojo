import './App.css';
import { useState, createContext } from 'react';
import { Wrapper } from './wrappers/Wrapper';

export const AppContext = createContext()

function App() {
  const [username, setUsername] = useState("Big Al")
  const operations = [username,setUsername]
  return (
    <div className="App">
      <AppContext.Provider value={operations} >
        <Wrapper />
      </AppContext.Provider>
    </div>
  );
}

export default App;
