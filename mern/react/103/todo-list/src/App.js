import './App.css';
import {useState, useEffect} from 'react'
import TodoEntry from './components/TodoEntry';
import TodoList from './components/TodoList';

function App() {
  // SETTING STATE
  const [tasks, setTasks] = useState([
    {task:"learn Mern", completed:false},
    {task:"buy groceries", completed:true},
    {task:"clean House", completed:false}
  ])

  useEffect(() => {
    const data = localStorage.getItem("my-todos")
    if (data) setTasks(JSON.parse(data));
  }, [])
  
  useEffect(() => {
    localStorage.setItem("my-todos", JSON.stringify(tasks))
  })

  // JSX
  return (
    <div className="App container mt-5">
      <h1 style={{textAlign:"center"}}>Mr. 636's Todo's</h1>
      <TodoEntry tasks={tasks} setTasks={setTasks}/>
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}



export default App;
