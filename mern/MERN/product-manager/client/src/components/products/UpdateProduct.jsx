import React from 'react'
import { useState,useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateProduct = () => {
    const {id} = useParams()
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+id)
            .then(res => {
                setName(res.data.name)
                setDescription(res.data.description)
                setPrice(res.data.price)
            })
            .catch(error => console.log(error))
    },[])

    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put("http://localhost:8000/api/products/"+id, {
            name,
            description,
            price
        })
            .then(res => navigate('/products'))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={handleUpdate}>
                <p>
                    <label>
                        Product Name:
                        <input type='text' value={name} onChange={ e => setName(e.target.value)} />
                    </label>
                </p>
                <p>
                    <label>
                        Description:
                        <input type='text' value={description} onChange={ e => setDescription(e.target.value)} />
                    </label>
                </p>
                <p>
                    <label>
                        Price:
                        <input type='number' value={price} step='0.01' onChange={ e => setPrice(e.target.value)} />
                    </label>
                </p>
                <input type="submit" value="Update" />
            </form>
            <Link to='/products'>Cancel</Link>
        </div>
    )
}

export default UpdateProduct