import {useState} from 'react'

const TodoEntry = (props) => {
    // SETTING UP STATE
    const [currEntryTask,setCurrEntryTask] = useState("")

    // EVENT LISTENING FUNCTIONS
    const handelFormSubmit = (e) => {
        e.preventDefault()
        props.onNewEntry(currEntryTask)
        setCurrEntryTask("")
    }

    return (
        <div style={{width:"fit-content", margin:"5px auto", fontSize:"2em"}}>
            <form onSubmit={(e) => handelFormSubmit(e)}>
                <input type="text" value={currEntryTask} onChange={(e) => setCurrEntryTask(e.target.value)}/>
                <input type="submit" value="Add Todo" />
            </form>
        </div>
    )
}

export default TodoEntry