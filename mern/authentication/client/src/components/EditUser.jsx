import { useEffect,useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"


const EditUser = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errors,setErrors] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`,{withCredentials: true})
            .then(res => {
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
                setEmail(res.data.email)
                setPassword(res.data.password)
            })
    },[])

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/users/${id}`, {
            firstName,
            lastName,
            email,
            password: password
        }, {withCredentials: true})
            .then(()=>navigate('/'))
            .catch(err => {
                setErrors(err.response.data.errors)
            })
    }
    return (
        <div>
            <h1>EditUser</h1>
            <form onSubmit={e=>submitHandler(e)}>
                <p>
                    <label>First Name:
                        <input type="text" value={firstName} onChange={e=>setFirstName(e.target.value)} />
                    </label>
                </p>
                {errors.firstName && <p>{errors.firstName.message}</p>}
                <p>
                    <label>Last Name:
                        <input type="text" value={lastName} onChange={e=>setLastName(e.target.value)} />
                    </label>
                </p>
                {errors.lastName && <p>{errors.lastName.message}</p>}
                <p>
                    <label>Email:
                        <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
                    </label>
                </p>
                {errors.email && <p>{errors.email.message}</p>}
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}

export default EditUser