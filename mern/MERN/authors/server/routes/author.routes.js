const AuthorController = require("../controllers/author.controller")

module.exports = app => {
    app.put("/api/authors/:id", AuthorController.updateAuthor)
    app.delete("/api/authors/:id", AuthorController.deleteAuthor)
    app.get("/api/authors/:id", AuthorController.fetchAuthorById)
    app.get("/api/authors", AuthorController.fetchAllAuthors)
    app.post("/api/authors", AuthorController.createAuthor)
}
