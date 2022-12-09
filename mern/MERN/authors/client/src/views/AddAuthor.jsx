import axios from "axios"
import {Link, useNavigate} from "react-router-dom"
import { useState } from "react"
import AuthorForm from "../components/AuthorForm"

const AddAuthor = () => {
    const [errors,setErrors] = useState({})
    const navigate = useNavigate()

    const addAuthor = authorParams => {
        axios.post("http://localhost:8000/api/authors", authorParams)
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => setErrors(err.response.data.errors))
    }

    return (
        <div>
            <Link to={"/"}>Home</Link>
            <h4>Add a new author:</h4>
            <AuthorForm 
                initName={""}
                submitHandler={addAuthor}
                errors={errors}
            />
        </div>
    )
}

export default AddAuthor