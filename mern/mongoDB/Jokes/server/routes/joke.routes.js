const JokeController = require("../controllers/joke.controller")

module.exports = app => {
    app.get('/api/jokes', JokeController.fetchAllJokes)
    app.get('/api/jokes/:id', JokeController.fetchJokeById)
    app.post('/api/jokes', JokeController.createNewJoke)
    app.put('/api/jokes/:id', JokeController.updateJokeById)
    app.delete('/api/jokes/:id', JokeController.deleteJokeById)
}