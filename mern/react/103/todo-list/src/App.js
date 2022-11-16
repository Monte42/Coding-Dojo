import './App.css';
import {useState, useEffect} from 'react'
import TodoEntry from './components/TodoEntry';
import TodoList from './components/TodoList';

const dataFromStorage = JSON.parse(localStorage.getItem("tasks") || '[]')

function App() {
  // SETTING STATE
  const [tasks, setTasks] = useState(dataFromStorage)

  
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
    console.log("StateChange...\n",localStorage.getItem("tasks"));
  },[tasks])

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
