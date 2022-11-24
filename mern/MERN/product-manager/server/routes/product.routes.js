const ProductController = require("../controllers/product.controller")

module.exports = (app) => {
    app.get('/api', ProductController.index)
    app.get('/api/products/:id', ProductController.fetchProductsById)
    app.get('/api/products', ProductController.fetchAllProducts)
    app.post('/api/products', ProductController.createProduct)
}