import { useContext, useState } from 'react'
import { AppContext } from '../../App'
import ProductForm from './ProductForm'
import ProductList from './ProductList'

const ProductsPage = () => {
    const [username,setUsername] = useContext(AppContext)
    const [products,setProducts] = useState([])
    return (
        <div>
            <h1>Products Page</h1>
            <h2>{username}</h2>
            <input type="text" onChange={e => setUsername(e.target.value)} />
            <ProductForm products={products} setProducts={setProducts} />
            <ProductList products={products} setProducts={setProducts}/>
        </div>
    )
}

export default ProductsPage