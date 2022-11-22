const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: [true, "First name is required"],
            minlength: [2, "2 chars please"]
        },
        last_name: {
            type: String,
            required: [true, "Last name is required"],
            minlength: [2, "2 chars please"],
            maxlength: [20, "20 chars max"]
        },
        age: {
            type: Number,
            min: [1, "not old enough"],
            max: [150, "too old"],
        },
        email: {
            type: String,
            required: [true, "Email required"],
            minlength: [6, "6 chars please"]
        },
    }, {timestamps: true}
)

const User = mongoose.model("User", UserSchema)

module.exports = User