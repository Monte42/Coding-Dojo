const mongoose = require('mongoose')

mongoose.set("strictQuery",false)

mongoose.connect('mongodb://127.0.0.1/authors', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Authors DB is active"))
    .catch(() => console.log("There was an error starting the DB"))

