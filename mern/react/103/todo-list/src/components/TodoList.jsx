import React from 'react'
import { useState } from 'react'

const TodoList = ({tasks,setTasks}) => {

    const [edit,setEdit] = useState("")
    const [editError,setEditError] = useState("")


    // EVENT LISTING FUNCTIONS
    const handleCompletion = (index) =>{
        tasks[index].completed ? tasks[index].completed=false : tasks[index].completed=true
        setTasks([...tasks])
    }
    const handleDelete = (index) => {
        const temptasks = tasks.filter( el => tasks.indexOf(el) !==index)
        setTasks([...temptasks])
    }
    const handleEditSubmit = (e, index) =>{
        e.preventDefault()
        if (edit.length<2) {
            setEditError("Must be 2 chars long")
            return
        }
        const updatedTasks = [...tasks]
        updatedTasks[index].task = edit
        setTasks(updatedTasks)
        setEdit("")
        setEditError("")
        document.getElementById("editInput"+index).value = ""
    }


    // JSX
    return (
        <div className='border border-secondary p-2 mb-2 border-opacity-50' style={{fontSize:"1.5em", width:"50%", margin:"10px auto", maxHeight:"700px", overflow:"auto"}}>
            {
                editError ? <p style={{textAlign:"center", color:"red"}}>{editError}</p> : ""
            }
            {
                tasks.map((todo, i) =>
                    <div key={i}>
                        <div className="row" style={{width:"90%", margin:" 5px auto", padding:"10px 30px", borderBottom:"1px solid black"}}>
                            {
                                todo.completed ?
                                <p className='col-8' style={{textDecoration:"line-through"}}>{todo.task}</p> :
                                <p className='col-8'>{todo.task}</p> 
                            }
                            <form className='col-1'>
                                <input type="checkbox" checked={todo.completed} onChange={() => handleCompletion(i)}/>
                            </form>
                            <button type="button" className="btn btn-danger col-3" onClick={()=>handleDelete(i)}>Delete</button>
                        </div>
                        <div className="row">
                            <form onSubmit={(e) => handleEditSubmit(e, i)}>
                                <label>Edit: 
                                    <input type="text" id={`editInput${i}`} onChange={(e) => setEdit(e.target.value)}/>
                                </label>
                                <input type="submit" value="Commit" />
                            </form>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default TodoList
