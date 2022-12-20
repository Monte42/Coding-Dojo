import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Register from './views/users/Register';
import UserList from './views/users/UserList';
import Login from './views/users/Login';
import EditUser from './views/users/EditUser';
import ChatLobby from './views/chat/ChatLobby';
import React, { useState } from 'react';
import { useEffect } from 'react';
import PrivateChat from './views/chat/PrivateChat';

export const UserContext = React.createContext()

const persistData = JSON.parse(localStorage.getItem("user") || '{}')

function App() {
  const [user,setUser] = useState(persistData)
  
  useEffect(() => {
      localStorage.setItem("user", JSON.stringify(user))
  },[user])
  return (
    <div className="App">
      <UserContext.Provider
        value={[user,setUser]}
      >
        <BrowserRouter>
          <Routes>
            <Route element={<Register/>} path="/register"/>
            <Route element={<Login/>} path="/login"/>
            <Route element={<UserList/>} path="/users"/>
            <Route element={<EditUser/>} path="/users/:id/edit"/>
            <Route element={<ChatLobby/>} path="/chat_lobby"/>
            <Route element={<PrivateChat/>} path="/chat/:room" />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
