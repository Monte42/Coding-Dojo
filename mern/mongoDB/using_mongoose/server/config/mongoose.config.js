const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/users_one',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to the DB..."))
    .catch(() => console.log("Something went wrong..."))