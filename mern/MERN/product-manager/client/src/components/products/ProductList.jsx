import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'


const ProductList = ({products, setProducts}) => {

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data.products)
            })
    },[])


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
                                <p>{p.description}</p>
                                <p>${p.price}</p>
                            </section>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ProductList