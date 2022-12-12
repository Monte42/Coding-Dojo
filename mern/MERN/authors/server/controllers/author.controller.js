const Author = require("../models/author.model")

module.exports.createAuthor = (req,res) => {
    Author.exists({name:req.body.name})
        .then(authorExists => {
            if (authorExists) return Promise.reject({errors:{name:{message:"This Author already exists"}}})
            return Author.create(req.body)
        })
        .then(newAuthor => res.json(newAuthor))
        .catch(e => res.status(400).json(e))
}

module.exports.fetchAllAuthors = (req,res) => {
    Author.find().sort({name:1})
        .then(authors => res.json(authors))
        .catch(e => console.log(e))
}

module.exports.fetchAuthorById = (req,res) => {
    Author.findById({_id:req.params.id})
        .then(author => res.json(author))
        .catch(e => console.log(e))
}

module.exports.updateAuthor = (req,res) => {
    Author.updateOne({_id:req.params.id}, req.body, {runValidators:true})
        .then(results => res.json(results))
        .catch(e => res.status(400).json(e))
}

module.exports.deleteAuthor = (req,res) => {
    Author.findByIdAndDelete({_id:req.params.id})
        .then(results => res.json(results))
        .catch(e => console.log(e))
}