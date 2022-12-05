const PersonController = require("../controllers/Person.controller")

module.exports = (app) => {
    app.get("/api/people/:id", PersonController.fetchById)
    app.put("/api/people/:id", PersonController.updatePerson)
    app.delete("/api/people/:id", PersonController.deletePerson)
    app.get("/api/people", PersonController.fetchAll)
    app.post("/api/people", PersonController.createPerson)
}