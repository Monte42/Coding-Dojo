const Product = require('../models/product.model')


module.exports.index = (req,res) => {
    res.json({msg: "Hello World!"})
}

module.exports.createProduct = (req,res) => {
    Product.exists({name:req.params.name})
        .then(productExists => {
            if (productExists) return Promise.reject("Prod Exist")
            return Product.create(req.body)
        })
        .then(newProduct => res.json({newProduct}))
        .catch(err => res.json({msg: `***ERROR: ${err}`}))
}

module.exports.fetchAllProducts = (req,res) => {
    Product.find()
        .then(products => res.json({products}))
        .catch(error => res.json({message: `***ERROR:`, error}))
}

module.exports.fetchProductsById = (req,res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(error => res.json({message:"***ERROR", error}))
}

module.exports.updateProduct = (req,res) => {
    Product.updateOne({_id:req.params.id}, req.body, {new:true})
        .then(results => res.json({results}))
        .catch(error => res.json({message:"***ERROR", error}))
    }
    
module.exports.deleteProduct = (req,res) => {
    Product.deleteOne({_id:req.params.id})
    .then(results => res.json(results))
    .catch(error => res.json({message:"***ERROR", error}))
}