const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name Needed"],
        minLength: [3, "First Name Must Be 3 Chars"],
        maxLength: [150, "First Name Cant Exceed Chars"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name Needed"],
        minLength: [3, "Last Name Must Be 3 Chars"],
        maxLength: [150, "Last Name Cant Exceed Chars"]
    },
    age: {
        type: Number,
        required: [true, "Age Needed"],
        min: [18, "must be 18"],
        max: [120, "must be alive"]
    },
    email: {
        type: String,
        validate: {
            validator: e => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)
            },
            message: props => `${props.value} not valid email`
        },
        required: [true, "Email Needed"],
        minLength: [3, "Email Must Be 3 Chars"],
        maxLength: [150, "Email Cant Exceed Chars"],
        unique: true
        
    }
})

module.exports = mongoose.model("Person", PersonSchema)