import axios from "axios"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import io from "socket.io-client"
import MessageBoard from "../../components/chat/MessageBoard"
import PageHeader from "../../components/general/PageHeader"

const PrivateChat = () => {
    const [socket] = useState(() => io(":8000"))
    const {room} = useParams()
    const [msgs, setMsgs] = useState([])

    useEffect(() => {
        if (room.length>0) {
            axios.get(`http://localhost:8000/api/chat/${room}`)
                .then(res => setMsgs(res.data))
                .then(()=>socket.emit("send_new_message",msgs,room))
                .catch(err => console.log(err))
        }
        },[msgs])

    useEffect(() => {
        socket.on("receive_new_message", data => setMsgs(data))
        return () => socket.disconnect(true)
    },[])

    return (
        <div>
            <PageHeader />
            <h1>Private chat</h1>
            <MessageBoard msgs={msgs} setMsgs={setMsgs} room={room} />
        </div>
    )
}

export default PrivateChat