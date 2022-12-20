import { useState,useContext } from 'react'
import { UserContext } from "../../App"
import axios from "axios"
import Message from './Message'
import { io } from 'socket.io-client'

const MessageBoard = ({msgs,setMsgs,room}) => {
    const [socket] = useState(() => io(":8000"))
    const [user] = useContext(UserContext)
    const [msg,setMsg] = useState("")
    const [errors,setErrors] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/chat/newMessage`, {
            message: msg,
            from: `${user.firstName} ${user.lastName}`,
            room
        })
            .then(res => setMsgs([...msgs,res.data]))
            .catch(err => setErrors(err.response.data.errors))
        setMsg("")
    }

    return (
        <div>
            <h3>Messages</h3>
            <p>{user.firstName}</p>
            <div id='message-box'>
                {msgs &&
                    msgs.map((message,index) => {
                        return(
                            message.from == `${user.firstName} ${user.lastName}` ?
                            <Message key={index} index={index} message={message} style={"message-out message"}/>  :
                            <Message key={index} message={message} style={"message-in message"}/>
                        )
                    })
                }
                <p id="msg-btm"></p>
            </div>
            <form onSubmit={submitHandler}>
                <input type="text" value={msg} onChange={e=>setMsg(e.target.value)}/>
                {errors.message && <p>{errors.message.message}</p>}
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default MessageBoard