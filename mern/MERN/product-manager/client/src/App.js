import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React,{ useState,useEffect } from 'react';
import ProductsPage from './views/products/ProductsPage';
import OneProduct from './components/products/OneProduct';
import UpdateProduct from './components/products/UpdateProduct';

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
            <Route element={<OneProduct/>} path="/products/:id" />
            <Route element={<UpdateProduct/>} path="/products/edit/:id" />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;