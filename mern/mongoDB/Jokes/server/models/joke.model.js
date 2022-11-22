const mongoose = require('mongoose')


const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "Must have set up"],
        },
        punchline: {
            type: String,
            required: [true, "Must have punchline"]
        }
    }, {timestamps: true}
)


const Joke = mongoose.model("joke", JokeSchema)

module.exports = Joke