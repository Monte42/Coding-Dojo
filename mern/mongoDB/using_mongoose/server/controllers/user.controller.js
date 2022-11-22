const User = require("../models/user.model")

module.exports.findAllUsers = (req,res) => {
    User.find()
        .then( allUsers => res.json({users:allUsers}))
        .catch( err => res.json({message:"***ERROR: ", error:err}))
}

module.exports.findUserById = (req,res) => {
    User.find({_id: req.params.id})
        .then(user => res.json({user}))
        .catch( err => res.json({message:"***ERROR: ", error:err}))
}

module.exports.findUserByName = (req,res) => {
    console.log(req.params);
    User.find({first_name: req.params.first_name})
        .then(user => res.json({user}))
        .catch( err => res.json({message:"***ERROR: ", error:err}))
}

module.exports.createUser = (req,res) => {
    console.log(req.body);
    User.exists({first_name:req.params.first_name})
        .then(userExists => {
            if (userExists) return Promise.reject("Something went wrong..")
            return User.create(req.body)
        })
        .then(savedResult => res.json(savedResult))
        .catch( err => res.json({message:"***ERROR: ", error:err}))
}

module.exports.updateUserById = (req, res) => {
    User.updateOne({_id:req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedUser => res.json({user:updatedUser}))
        .catch( err => res.json({message:"***ERROR: ", error:err}))
}

module.exports.deleteUserById = (req,res) => {
    User.remove({_id:req.params.id})
        .then( result => res.json({result}))
        .catch( err => res.json({message:"***ERROR: ", error:err}))
}

module.exports.deleteAllUsers = (req,res) => {
    User.remove()
        .then( result => res.json({result}))
        .catch( err => res.json({message:"***ERROR: ", error:err}))
}