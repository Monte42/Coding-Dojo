import { useEffect,useState } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import axios from "axios"
import './App.css';
import Home from './views/Home';
import AddAuthor from './views/AddAuthor';
import EditAuthor from './views/EditAuthor';



function App() {
  const [authorList,setAuthorList] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/authors")
      .then(res => setAuthorList(res.data))
      .catch(e => console.log(e))
  },[authorList])

  const removeFromDom = authorId => {
    axios.delete("http://localhost:8000/api/authors/"+authorId)
      .then( res => {
        setAuthorList(authorList.filter(author => author._id !== authorId))
      })
      .catch( e => console.log(e))
  }

  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Routes>
          <Route element={<Home authorList={authorList} removeFromDom={removeFromDom} />} path="/" />
          <Route element={<AddAuthor authorList={authorList} setAuthorList={setAuthorList}/>} path="/new" />
          <Route element={<EditAuthor removeFromDom={removeFromDom} />} path="/edit/:id" />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
