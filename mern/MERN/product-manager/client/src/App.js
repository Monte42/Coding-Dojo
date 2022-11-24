import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductsPage from './components/products/ProductsPage';
import React,{ useState,useEffect } from 'react';

export const AppContext = React.createContext()

const persistData = JSON.parse(localStorage.getItem("username") || '[]')

function App() {
  const [username,setUsername] = useState(persistData)
  
  useEffect(() => {
      localStorage.setItem("username", JSON.stringify(username))
  },[username])
    
  
  return (
    <div className="App">
      <AppContext.Provider value={[username,setUsername]}>
        <BrowserRouter>
          <Routes>
          <Route element={<ProductsPage/>} path="/products" default />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
