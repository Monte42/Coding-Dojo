import {Link} from 'react-router-dom'
import axios from "axios"
import {useParams, useNavigate} from "react-router-dom"
import {useState,useEffect} from 'react'

import AuthorForm from "../components/AuthorForm"

const EditAuthor = () => {
    const [author, setAuthor] = useState("")
    const [loaded, setLoaded] = useState(false)
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setAuthor(res.data.name)
                setLoaded(true)
            })
    },[])

    const submitHandler = authorParam => {
        axios.put(`http://localhost:8000/api/authors/${id}`, authorParam)
            .then(res => console.log(res))
            .catch(e => console.log(e))
        navigate('/')
    }

    return (
        <div>
            <Link to={"/"}>Home</Link>
            <h4>Edit this author:</h4>
            {
                loaded ?
                <AuthorForm 
                    submitHandler={e => submitHandler(e)}
                    initName={author}
                />
                : <p>LOADING..</p>
            }
        </div>
    )
}

export default EditAuthor