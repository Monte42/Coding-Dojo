const mongoose = require("mongoose")

const ResoultionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please give the resoultion a name"],
        minLength: [3, "Resoultion must be at least 3 characters long"],
        maxLength: [155, "Resoultion can not be more than 155 characters long"]
    },
    category: {
        type: String,
        required: [true, "Please give the category a name"],
        minLength: [3, "Category must be at least 3 characters long"],
        maxLength: [155, "Category can not be more than 155 characters long"]
    },
    description: {
        type: String,
        required: [true, "Please give the description a name"],
        minLength: [3, "Description must be at least 3 characters long"],
        maxLength: [155, "Description can not be more than 155 characters long"]
    },
    rewards: {
        type: [String]
    },
    likes: {
        type: Number
    }
}, {timeStamps:true})

module.exports = mongoose.model("Resoultion", ResoultionSchema)