const UserController = require("../controllers/user.controller")

module.exports = app => {
    app.get("/api/users", UserController.findAllUsers)
    app.get("/api/users/:id", UserController.findUserById)
    app.put("/api/users/:id", UserController.updateUserById)
    app.post("/api/users", UserController.createUser)
    app.delete("/api/users/:id", UserController.deleteUserById)
    app.delete("/api/users/masterDelete", UserController.deleteAllUsers)
}
