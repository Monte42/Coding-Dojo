import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../App'

const Login = () => {
    const [user,setUser] = useContext(UserContext)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errors,setErrors] = useState({})
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/login", {
            email,
            password
        },{withCredentials:true, credentials:"include"})
        .then(res => {
            setUser(res.data.user)
            navigate('/users')
        })
        .catch(err => {
            setErrors(err.response.data)
        })
}

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={e => submitHandler(e)}>
                {errors && <p>{errors.error}</p>}
                <p>
                    <label> Email:
                        <input type="text" onChange={e => setEmail(e.target.value)}/>
                    </label>
                </p>
                <p>
                    <label> Password:
                        <input type="text" onChange={e => setPassword(e.target.value)}/>
                    </label>
                </p>
                <input type="submit" value="Login" />
            </form>
            <Link to={"/register"}>Not a member?</Link>
        </div>
    )
}

export default Login