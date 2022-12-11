const mongoose = require('mongoose')

mongoose.set("strictQuery",false)

mongoose.connect('mongodb://127.0.0.1/resolutions', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB is active"))
    .catch(() => console.log("There was an error starting the DB"))