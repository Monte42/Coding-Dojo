const express = require("express")
const cors = require("cors")
const app = express()
const cookieParser = require("cookie-parser")
const socket = require("socket.io")

require("dotenv").config()

app.use(express.json(), express.urlencoded({extended:true}))

app.use(cookieParser())

app.use(cors({
    credentials:true,
    origin: ["http://localhost:3000","http://10.0.0.47:3000"],
}))

require("./config/mongoose.config")
require("./routes/user.routes")(app)
require("./routes/message.routes")(app)

const server = app.listen(8000, () => console.log("Running..."))

const io = socket(server, {
    cors: {
        origin: ["http://localhost:3000","http://10.0.0.47:3000"],
        methods: ["GET","POST","PUT","DELETE"],
        allowedHeaders: ["*"],
        credentials: true
    }
})

io.on("connection", socket => {
    console.log("New User: "+socket.id);
    socket.on("send_new_message", (data,room, cb) => {
        socket.to(room).emit("receive_new_message",data, cb)
    })
    socket.on("join_room", (room) => {
        socket.join(room)
    })
})