const express = require('express');
const app = express();
const cors = require('cors');
const socket = require('socket.io');
const port = 8000;
app.use(cors());

const server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

// to initialize the socket, we need to invoke a new instance
//     of socket.io and pass it our express server instance
// We must also include a configuration settings object to prevent CORS errors
const io = socket(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});

io.on("connection", socket => {
    console.log('socket id: ' + socket.id);
    
    socket.on("in", data => {
        // send a message with "data" to ALL clients EXCEPT for the one that emitted the
    	//     "event_from_client" event
        socket.broadcast.emit("out", data);
    });
});




// const express = require('express');
// const app = express();
// const http = require('http')
// const {Server} = require('socket.io')
// const cors = require('cors')

// app.use(cors())

// const server = http.createServer(app)

// const io = new Server(server, {
//     cors: {
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST'],
//     }
// })

// io.on("connection", (socket) => {
//     console.log(`user on ${socket.id}`);

//     socket.on("send_msg", (data) => {
//         socket.broadcast.emit('receive_msg', data)
//     })
// })

// server.listen(8000, () => console.log('server up..'))

// socket.broadcast.emit will emit the event to all users except the sending th data
// io.emit will emit the event to all connected users
// socket.emit will emit an event to a specific user => will need to look up how to trgt a specific client 
