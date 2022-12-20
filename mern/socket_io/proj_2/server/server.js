const express = require('express');
const app = express();
const cors = require('cors');
const socket = require('socket.io');
const port = 8000;
app.use(cors());

const server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

const io = socket(server, {
    cors: {
        origin: ['http://localhost:3000', 'http://10.0.0.47:3000'],
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});

io.on("connection", socket => {
    io.emit("msg_from_server", `${socket.id} just Joined`)
    
    socket.on("msg_from_client", data => {
        socket.broadcast.emit("msg_from_server", data);
    });
});


