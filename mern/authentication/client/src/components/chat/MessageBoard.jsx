import { useState,useContext } from 'react'
import { UserContext } from "../../App"
import axios from "axios"
import Message from './Message'
import { io } from 'socket.io-client'
import { useEffect } from 'react'

const MessageBoard = ({msgs,setMsgs,room}) => {
    const [socket] = useState(() => io(":8000"))
    const [user] = useContext(UserContext)
    const [msg,setMsg] = useState("")
    const [errors,setErrors] = useState({})

    useEffect(() => {
        const el = document.getElementById("msg-btm")
        el.scrollIntoView()
    },[msgs])

    useEffect(() => {
        socket.on("msg_from_server", data => {
            setMsgs(prevMsgs => [...prevMsgs, data])
        })
        return () => socket.disconnect(true)
    },[])

    const submitHandler = (e) => {
        e.preventDefault()
        const newMsg = {
            from: `${user.firstName} ${user.lastName}`,
            message: msg,
            room
        }
        axios.post("http://localhost:8000/api/chat/newMessage", newMsg, {withCredentials:true})
            .then(res=> setMsgs([...msgs, res.data]))
            .catch(err => setErrors(err.response.data.errors))
        socket.emit("msg_from_client", newMsg)
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