import React, { useEffect, useState } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import UserAuth from './views/user_auth/UserAuth';
import Home from './views/Home';
import EditUser from './views/users/EditUser';
import PrivateRoutes from './utils/PrivateRoutes';
import UserProfile from './views/users/UserProfile';
import TickerDetail from './views/ticker/TickerDetail';

export const JournalContext = React.createContext()

const persistData = JSON.parse(localStorage.getItem("user") || null)

function App() {
  const [user,setUser] = useState(persistData)
  const [time,setTime] = useState(new Date())

  useEffect(() => {
      const interval = setInterval(() => setTime(new Date()), 1000);
      return () => {
          clearInterval(interval);
      };
  }, []);
  
  useEffect(() => {
      localStorage.setItem("user", JSON.stringify(user))
  },[user])

  return (
    <JournalContext.Provider value={[user,setUser,time]}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<UserAuth />} path={'/register'} />
            <Route element={<PrivateRoutes/>}>
              <Route element={<Home />} path={'/'} />
              <Route element={<EditUser />} path={'/user/:id/edit'} />
              <Route element={<UserProfile />} path={'/:username/profile'} />
              <Route element={<TickerDetail />} path={'/details/:tkr'} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </JournalContext.Provider>
  );
}

export default App;
