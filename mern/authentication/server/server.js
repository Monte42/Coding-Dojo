const express = require("express")
const cors = require("cors")
const app = express()
const cookieParser = require("cookie-parser")

require("dotenv").config()

app.use(express.json(), express.urlencoded({extended:true}))

app.use(cookieParser())

app.use(cors({
    credentials:true,
    origin: "http://localhost:3000",
}))

require("./config/mongoose.config")
require("./routes/user.routes")(app)

app.listen(8000, () => console.log("Running..."))