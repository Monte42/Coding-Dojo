const ProductController = require("../controllers/product.controller")

module.exports = (app) => {
    app.get('/api', ProductController.index)
    app.get('/api/products/:id', ProductController.fetchProductsById)
    app.put('/api/products/:id', ProductController.updateProduct)
    app.delete('/api/products/:id', ProductController.deleteProduct)
    app.get('/api/products', ProductController.fetchAllProducts)
    app.post('/api/products', ProductController.createProduct)
}