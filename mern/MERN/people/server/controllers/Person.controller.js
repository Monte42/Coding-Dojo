const Person = require("../models/person.model")

module.exports.createPerson = (req,res) => {
    Person.create(req.body)
        .then(newUser => res.json(newUser))
        .catch(e => res.status(400).json(e))
}

module.exports.fetchAll = (req,res) => {
    Person.find()
        .then(people => res.json(people))
        .catch(e => console.log(`ERROR: ${e}`))
    }
    
module.exports.fetchById = (req,res) => {
    Person.findById({_id:req.params.id})
        .then(person => res.json(person))
        .catch(e => console.log(`ERROR: ${e}`))
}

module.exports.updatePerson = (req,res) => {
    Person.findByIdAndUpdate({_id:req.params.id}, req.body)
        .then(results => res.json(results))
        .catch(e => console.log(`Error: ${e}`))
}

module.exports.deletePerson = (req,res) => {
    Person.findByIdAndDelete({_id:req.params.id})
        .then(results => res.json(results))
        .catch(e => console.log(`Error: ${e}`))
}