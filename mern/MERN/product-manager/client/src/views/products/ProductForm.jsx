import { useState } from "react";
import axios from 'axios'

const ProductForm = ({products,setProducts}) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)

    const createUser = (e) =>{
        e.preventDefault()
        setProducts([...products,{name,description,price}])
        axios.post("http://localhost:8000/api/products", {
            name,
            description,
            price
        })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Create Product</h1>
            <form onSubmit={e => createUser(e)}>
                <p>
                    <label>Title:
                        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                    </label>
                </p>
                <p>
                    <label>Description:
                        <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
                    </label>
                </p>
                <p>
                    <label>Price:
                        <input type="number" step="0.01" value={price} onChange={e => setPrice(e.target.value)}/>
                    </label>
                </p>
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}

export default ProductForm