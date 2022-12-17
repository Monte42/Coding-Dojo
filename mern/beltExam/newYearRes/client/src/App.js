import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import React, {useState,useEffect} from 'react';
import axios from "axios"
import io from "socket.io-client"
import Home from './views/Home';
import Details from './views/Details';
import NewResolution from './views/NewResolution';
import EditResolution from './views/EditResolution';

export const AppContext = React.createContext()

function App() {
  const [socket] = useState(() => io(':8000'))
  const [resolutions,setResolutions] = useState([])

  useEffect(() =>{
    axios.get("http://localhost:8000/api/resolutions")
      .then(res => setResolutions(res.data))
      .catch(e => console.log(e))
  },[resolutions])

  useEffect(() => {
    socket.on("new_resolution_list", data =>{
      setResolutions(data)
    })
    return () => socket.disconnect(true)
  },[])

  return (
    <div className="App">
      <AppContext.Provider
      value={[resolutions,setResolutions,socket]}>
        <BrowserRouter>
          <Routes>
            <Route element={<Home/>} path="/" />
            <Route element={<Details/>} path="/resolutions/:id" />
            <Route element={<NewResolution/>} path="/resolutions/new" />
            <Route element={<EditResolution/>} path="/resolutions/:id/edit"/>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
