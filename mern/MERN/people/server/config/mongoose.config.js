const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/people", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB up"))
    .catch(() => console.log("DB error"))