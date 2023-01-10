import axios from 'axios'
import { useState,useContext } from 'react'
import UserPwd from './form_blocks/UserPwd'
import { JournalContext } from '../../App'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
    const [,setUser] = useContext(JournalContext)
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [errors,setErrors] = useState({})
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/users/login", {
            username,
            password
        })
            .then(res => {  // Setting Session
                setUser({
                    id: res.data.id,
                    name: `${res.data.first_name} ${res.data.last_name}`,
                    username: res.data.username
                })
            })
            .then(() => navigate('/'))
            .catch(err => setErrors(err.response.data))
    }

    return (
        <form onSubmit={submitHandler}>
            {errors.message && <p className='error'>{errors.message}</p>}
            <UserPwd 
                username={username} setUsername={setUsername}
                password={password} setPassword={setPassword}
            />
            <button className='btn btn-primary'>Login</button>
        </form>
    )
}

export default UserLogin