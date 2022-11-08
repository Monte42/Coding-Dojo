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


  // FUNCTIONS TO PASSDOWN
  const onNewEntry = (task) => {
    setTasks([...tasks, {task:task, completed:false}])
  }
  const onComplete = (index) =>{
    tasks[index].completed ? tasks[index].completed=false : tasks[index].completed=true
    setTasks([...tasks])
  }
  const onDelete = (task) => {
    const temptasks = tasks.filter( el => el.task!==task)
    setTasks([...temptasks])
  }

  // JSX
  return (
    <div className="App container mt-5">
      <h1 style={{textAlign:"center"}}>Mr. 636's Todo's</h1>
      <TodoEntry onNewEntry={onNewEntry}/>
      <TodoList onComplete={onComplete} onDelete={onDelete} allTodos={tasks}/>
    </div>
  );
}



export default App;
