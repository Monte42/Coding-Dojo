const User = require("../models/user.model")

module.exports = {
    register: (req,res) => {
        User.create(req.body)
            .then(user => res.json({msg:"yurp", user:user}))
            .catch(err => res.json(err))
    },
    fecthAllUsers: (req,res) => {
        User.find()
            .then(allUsers => res.json(allUsers))
            .catch(err => res.json(err))
    },
    fecthUserById: (req,res) => {
        User.findById({_id:req.params.id})
            .then(user => res.json(user))
            .catch(err => res.json(err))
    },
    updateUser: (req,res) => {
        User.findByIdAndUpdate({_id:req.params.id})
            .then(results => res.json(results))
            .catch(err => res.json(err))
    },
    deleteUser: (req,res) => {
        User.findByIdAndDelete({_id:req.params.id})
            .then(results => res.json(results))
            .catch(err => res.json(err))
    }
}