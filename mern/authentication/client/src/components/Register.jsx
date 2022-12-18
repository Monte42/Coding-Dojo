import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors,setErrors] = useState({})
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/register", {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        },{withCredentials:true, credentials:"include"})
            .then(() => navigate('/'))
            .catch(err => {
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={e => submitHandler(e)}>
                <p>
                    <label> First Name:
                        <input type="text" onChange={e => setFirstName(e.target.value)}/>
                    </label>
                </p>
                {errors.firstName && <p>{errors.firstName.message}</p>}
                <p>
                    <label> Last Name:
                        <input type="text" onChange={e => setLastName(e.target.value)}/>
                    </label>
                </p>
                {errors.lastName && <p>{errors.lastName.message}</p>}
                <p>
                    <label> Email:
                        <input type="text" onChange={e => setEmail(e.target.value)}/>
                    </label>
                </p>
                {errors.email && <p>{errors.email.message}</p>}
                <p>
                    <label> Password:
                        <input type="password" onChange={e => setPassword(e.target.value)}/>
                    </label>
                </p>
                {errors.password && <p>{errors.password.message}</p>}
                <p>
                    <label> Confirm Password:
                        <input type="password" onChange={e => setConfirmPassword(e.target.value)}/>
                    </label>
                </p>
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    )
}

export default Register