import React from 'react'

const TodoList = (props) => {
    // DESTRUCTURING
    const {allTodos, onComplete, onDelete} = props

    // EVENT LISTING FUNCTIONS
    const handleCompletion = (index) =>{
        onComplete(index)
    }
    const handleDelete = (task) => {
        onDelete(task)
    }

    // JSX
    return (
        <div className='border border-secondary p-2 mb-2 border-opacity-50' style={{width:"50%", margin:"10px auto", maxHeight:"700px", overflow:"auto"}}>
            {
                allTodos.map((todo, i) =>{
                    return (
                        <div key={i} className="row" style={{width:"90%", margin:" 5px auto", padding:"10px 30px", borderBottom:"1px solid black"}}>
                            {
                                todo.completed ?
                                <p className='col-8' style={{fontSize:"1.5em", textDecoration:"line-through"}}>{todo.task}</p> :
                                <p className='col-8' style={{fontSize:"1.5em"}}>{todo.task}</p> 
                            }
                            <form className='col-1'>
                                <input type="checkbox" checked={todo.completed} onChange={() => handleCompletion(i)}/>
                            </form>
                            <button type="button" className="btn btn-danger col-3" onClick={()=>handleDelete(todo.task)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoList