import './App.css';
import React, { useState } from 'react';
import AppWrapper from './components/AppWrapper';


export const AppContext = React.createContext()

function App() {
  const [data,setData] = useState("Cant pass Objects")

  console.log(AppContext.Provider);
  return (
    <div className="App">
      <h1>Parent</h1>
        <AppContext.Provider value={data}>
          <AppWrapper/>
        </AppContext.Provider>
    </div>
  );
}

export default App;
