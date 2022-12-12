const express = require('express')
const cors = require("cors")
const app = express()
const socket = require('socket.io');

app.use(cors())
require('./config/mongoose.config')
app.use(express.json(), express.urlencoded({extended:true}))
require("./routes/resolution.routes")(app)

const server = app.listen(8000, () => console.log("The API is running on port 8000"))

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
    
    socket.on("change_in_resolutions", data => {
        socket.broadcast.emit("new_resolution_list", data);
    });
});