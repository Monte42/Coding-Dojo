const Joke = require("../models/joke.model")

module.exports.fetchAllJokes = (req,res) => {
    Joke.find()
        .then( jokes => res.json({jokes}))
        .catch( error => res.json({message:"***ERROR", error}))
}

module.exports.fetchJokeById = (req,res) => {
    Joke.find({_id: req.params.id})
        .then( joke => res.json({joke}))
        .catch( error => res.json({message:"***ERROR", error}))
}

module.exports.createNewJoke = (req,res) => {
    Joke.exists({setup: req.params.setup, punchline: req.params.punchline})
        .then(potentialUser => {
            if (potentialUser) return Promise.reject("Something went wrong")
            return Joke.create(req.body)
        .then(newUser => res.json({user: newUser}))
        .catch( error => res.json({message:"***ERROR", error}))
        })
}

module.exports.updateJokeById = (req,res) => {
    Joke.updateOne({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then( updatedJoke => res.json({joke: updatedJoke}))
        .catch(error => res.json({message:"***ERROR", error}))
}

module.exports.deleteJokeById = (req,res) => {
    Joke.remove({_id: req.params.id})
    .then(results => res.json({results}))
    .catch(error => res.json({message:"*ERROR", error}))
}