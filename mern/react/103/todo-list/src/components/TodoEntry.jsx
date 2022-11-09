import {useState} from 'react'

const TodoEntry = ({tasks, setTasks}) => {
    // SETTING UP STATE
    const [newTask,setNewTask] = useState("")

    // EVENT LISTENING FUNCTIONS
    const handelFormSubmit = (e) => {
        e.preventDefault()
        setTasks([...tasks, {task:newTask, completed:false}])
        setNewTask("")
    }

    return (
        <div style={{width:"fit-content", margin:"5px auto", fontSize:"2em"}}>
            <form onSubmit={(e) => handelFormSubmit(e)}>
                <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
                <input type="submit" value="Add Todo" />
            </form>
        </div>
    )
}

export default TodoEntry