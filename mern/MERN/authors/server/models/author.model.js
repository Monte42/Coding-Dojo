const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name must be at least 3 characters"],
        maxLength: [155, "Name can not exceed 155 characters"]
    }
})

module.exports = mongoose.model("Author", AuthorSchema)