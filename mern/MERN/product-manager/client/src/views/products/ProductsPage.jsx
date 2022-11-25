import { useContext, useState } from 'react'
import { AppContext } from '../../App'
import ProductForm from './ProductForm'
import ProductList from './ProductList'

const ProductsPage = () => {
    const [username,setUsername] = useContext(AppContext)
    const [products,setProducts] = useState([])

    const removeProduct = id => {
        setProducts(products.filter( p => p._id != id))
    }
    return (
        <div>
            <h1>Products Page</h1>
            <h2>Welcome, {username}</h2>
            <h6>This name will persist, even after refresh</h6>
            Login: <input type="text" onChange={e => setUsername(e.target.value)} />
            <ProductForm products={products} setProducts={setProducts} />
            <ProductList products={products} setProducts={setProducts} removeProduct={removeProduct} />
        </div>
    )
}

export default ProductsPage