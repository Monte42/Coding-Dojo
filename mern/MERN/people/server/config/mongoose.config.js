const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/people", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB up"))
    .catch(() => console.log("DB error"))