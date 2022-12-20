import { useState,useEffect } from 'react'
import axios from "axios"
import io from "socket.io-client"
import MessageBoard from '../../components/chat/MessageBoard'
import PageHeader from '../../components/general/PageHeader'

const ChatLobby = () => {
    const [socket] = useState(() => io(":8000"))
    const [msgs,setMsgs] = useState([])
    const [room,setRoom] = useState("")

    const joinChatRoom = (thisRoom) => {
        setRoom(thisRoom)
        axios.get(`http://localhost:8000/api/chat/${thisRoom}`,{withCredentials:true})
            .then(res => setMsgs(res.data))
            .then(()=> socket.emit('join_room', thisRoom))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (room.length>0) {
            axios.get(`http://localhost:8000/api/chat/${room}`)
                .then(res => setMsgs(res.data))
                .then(()=>{
                console.log('sss');
            })
                .catch(err => console.log(err))
        }
        },[])

    // useEffect(() => {
    //     socket.on("receive_new_message", data => setMsgs(data))
    //     return () => socket.disconnect(true)
    // },[])


    return (
        <div>
            <PageHeader />
            <h1>Chat Lobby</h1>
            <h2>Which room would you like to join?</h2>
            <button onClick={e => joinChatRoom('chat_1')}>Chat Room One</button>
            &nbsp; | &nbsp;
            <button onClick={e => joinChatRoom('chat_2')}>Chat Room Two</button>
            <MessageBoard msgs={msgs} setMsgs={setMsgs} room={room}/>
        </div>
    )
}

export default ChatLobby