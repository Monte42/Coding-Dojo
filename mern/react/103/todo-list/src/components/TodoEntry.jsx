import {useState} from 'react'

const TodoEntry = ({tasks, setTasks}) => {
    // SETTING UP STATE
    const [newTask,setNewTask] = useState("")
    const [newTaskError,setNewTaskError] = useState("")

    // EVENT LISTENING FUNCTIONS
    const handelFormSubmit = (e) => {
        e.preventDefault()
        if (newTask.length<2) {
            setNewTaskError("New Todo must be atleast 2 characters")
            return
        }
        setTasks([...tasks, {task:newTask, completed:false}])
        setNewTask("")
        setNewTaskError("")
    }

    return (
        <div style={{width:"fit-content", margin:"5px auto", fontSize:"2em"}}>
            {
                newTaskError ? <p style={{color:"red"}}>{newTaskError}</p> : ""
            }
            <form onSubmit={(e) => handelFormSubmit(e)}>
                <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
                <input type="submit" value="Add Todo" />
            </form>
        </div>
    )
}

export default TodoEntry