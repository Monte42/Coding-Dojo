import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const ProductList = ({products, setProducts, removeProduct}) => {

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data.products)
            })
    },[])

    const handleDelete = (e,id) => {
        e.preventDefault()
        axios.delete("http://localhost:8000/api/products/"+id)
        .then(res => removeProduct(id))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>All Products</h2>
            <ul>
                {
                    products.map( (p,i) => {
                        return(
                            <section key={i}>
                                <br/>
                                <p><strong>{p.name}</strong></p>
                                <p>
                                    <Link to={`/products/${p._id}`}>View</Link> |
                                    <Link to={`/products/edit/${p._id}`}>Edit</Link> |
                                    <span 
                                    onClick={e => handleDelete(e, p._id)}
                                    style={{textDecoration:'underline', color:'blue'}}
                                    >
                                        Delete
                                    </span> 
                                </p>
                            </section>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ProductList