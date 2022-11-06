import {useState} from 'react'

const FromMessageComponent = (props) => {

    const [msg, setMsg] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.onNewMessage(msg)
    }
    const handleChange = (e) => {
        setMsg(e.target.value)
    }


    return (
        <>
            <h2>Create new message</h2>
            <form onSubmit={handleSubmit}>
                <textarea onChange={(e) => handleChange(e)} cols="60" rows="10"></textarea>
                <br/>
                <input type="submit" value="Send" />
            </form>
            <br/>
        </>
    )
}

export default FromMessageComponent