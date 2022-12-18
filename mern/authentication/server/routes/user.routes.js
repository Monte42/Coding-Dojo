const UserController = require("../controllers/user.controller")

module.exports = app => {
    app.put("/api/users/:id", UserController.updateUser)
    app.delete("/api/users/:id", UserController.deleteUser)
    app.get("/api/users/:id", UserController.fecthUserById)
    app.get("/api/users", UserController.fecthAllUsers)
    app.post("/api/register", UserController.register)
    app.post("/api/login", UserController.login)
    app.get("/api/logout", UserController.logout)
}