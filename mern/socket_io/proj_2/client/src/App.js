import './App.css';
import io from "socket.io-client"
import {useState, useEffect} from "react"

function App() {
  const [socket] = useState(() => io(":8000"))
  const [msgs,setMsgs] = useState([])
  const [msg,setMsg] = useState("")

  useEffect(() => {
    socket.on("msg_from_server", data => {
      setMsgs(prevMsgs => [data,...prevMsgs])
    })
    return () => socket.disconnect(true)
  },[])

  const myFunc = () =>{
    socket.emit("msg_from_client", "You Clicked Me!")
  }

  const submitHandler = (e) =>{
    e.preventDefault()
    setMsgs([msg,...msgs])
    socket.emit("msg_from_client", msg)
    setMsg("")
  }

  return (
    <div className="App">
      <h1 onClick={myFunc}>Click Me</h1>
      <h3>messages</h3>
      <div style={{border:"1px solid black", width:"50vw", height:"40vh", overflow:"auto", margin:"0 auto"}}>
        {msgs &&
          msgs.map((m,i) => {
            return (
              <p key={i}>{m}</p>
            )
          })
        }
      </div>
      <form>
        <input type="text" value={msg} onChange={e=>setMsg(e.target.value)} />
        <button onClick={submitHandler}>Send</button>
      </form>
    </div>
  );
}

export default App;
