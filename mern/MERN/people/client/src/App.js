import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Main from './views/Main';
import Profile from './views/Profile';
import UpdatePerson from './views/UpdatePerson';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/people" />
          <Route element={<Profile/>} path="/people/:id" />
          <Route element={<UpdatePerson/>} path="/people/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
