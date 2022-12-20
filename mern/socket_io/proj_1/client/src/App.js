import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

// const socket = io.connect("http://localhost:8000")

function App() {
  // notice that we pass a callback function to initialize the socket
  // we don't need to destructure the 'setSocket' function since we won't be updating the socket state
  const [socket] = useState(() => io(':8000'))

  useEffect(() => {
    // we need to set up all of our event listeners
    // in the useEffect callback function
    console.log('Is this running?');
    socket.on('out', data => console.log(data));

    // note that we're returning a callback function
    // this ensures that the underlying socket will be closed if App is unmounted
    // this would be more critical if we were creating the socket in a subcomponent
    return () => socket.disconnect(true);
  }, []);

  const a = () => {
    socket.emit('in', {msg:"hello"})
  }

  return (
    <div className="App">
      <h1 onClick={a} >Socket Test</h1>
    </div>
  );
}

export default App;










// import {useState, useEffect} from 'react'
// import io from 'socket.io-client'
// import './App.css';

// const socket = io.connect("http://localhost:8000")

// function App() {
//   const [msg,setMsg] = useState('')
//   const [newMsg,setNewMsg] = useState("")

//   useEffect(() => {
//     socket.on('receive_msg', data => {
//       setNewMsg(data.msg)
//     })
//   },[socket])


//   const sendMsg = () => {
//     socket.emit('send_msg', {msg})
//   }

//   return (
//     <div className="App">
//       <input onChange={e => setMsg(e.target.value)}/>
//       <button onClick={sendMsg}>Send</button>
//       <div style={{border:"1px solid black", margin:'20px auto', width:"80%"}}>
//         <p>{newMsg}</p>
//       </div>
//     </div>
//   );
// }

// export default App;
