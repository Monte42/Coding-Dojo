import './App.css';
import Register from './components/Register';
import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom"
import Home from './components/Home';
import Login from './components/Login';
import EditUser from './components/EditUser';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Register/>} path="/register"/>
          <Route element={<Login/>} path="/login"/>
          <Route element={<Home/>} path="/"/>
          <Route element={<EditUser/>} path="/users/:id/edit"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
