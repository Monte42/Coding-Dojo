import {useEffect,useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from "axios"

const OneProduct = () => {
    const [product,setProduct] = useState({})
    const {id} = useParams()
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+id)
            .then(res => setProduct(res.data))
            .catch(error => console.log({message:"***ERROR", error}))
    },[])

    return (
        <div>
            <h1>{product.name}</h1>
            <h3>{product.description}</h3>
            <p>{product.price}</p>
            <Link to="/products">Home</Link>
        </div>
    )
}

export default OneProduct