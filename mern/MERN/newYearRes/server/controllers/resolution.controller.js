const Resolution = require('../models/resolution.model')

module.exports.createResolution = (req,res) => {
    Resolution.create(req.body)
        .then(newResolution => res.json(newResolution))
        .catch(e => res.status(400).json(e))
}

module.exports.fetchAllResolutions = (req,res) => {
    Resolution.find().sort({name:1})
        .then(allResolutions => res.json(allResolutions))
        .catch(e => res.json(e))
}

module.exports.fetchResolutionById = (req,res) => {
    Resolution.findById({_id:req.params.id})
        .then(resolution => res.json(resolution))
        .catch(e => res.json(e))
}

module.exports.updateResolution = (req,res) => {
    Resolution.updateOne({_id:req.params.id}, req.body, {runValidators:true})
        .then(results => res.json(results))
        .catch(e => res.status(400).json(e))
}

module.exports.deleteResolution = (req,res) => {
    Resolution.findByIdAndDelete({_id:req.params.id})
        .then(results => res.json(results))
        .catch(e => res.json(e))
}