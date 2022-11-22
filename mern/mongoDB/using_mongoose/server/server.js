const express = require("express")
const app = express()

require("./config/mongoose.config")

app.use(express.json(), express.urlencoded({extended:true}))

const appRoutes = require("./routes/user.routes")
appRoutes(app)

app.listen(8000, () => console.log("Server Up => localhost//:8000"))