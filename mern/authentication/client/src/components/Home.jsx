import axios from 'axios'
import { useEffect,useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Home = () => {
    const [users,setUsers] = useState([])
    const navigate = useNavigate()

    const logOut = () => {
        axios.get("http://localhost:8000/api/logout", {withCredentials:true})
        .then(() => navigate("/login"))
        .catch(e=> console.log(e))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/users", {withCredentials: true})
            .then(res => setUsers(res.data))
            .catch(e => console.log(e))
    },[])
    return (
        <div>
            <h1>All Users</h1>
            {
                users.map((u,i) => {
                    return (
                        <p key={i}>
                            {u.firstName} {u.lastName} |
                            <Link to={`/users/${u._id}/edit`}>Edit</Link>
                        </p>
                    )
                })
            }
            <button onClick={e =>logOut()}>Logout</button>
        </div>
    )
}

export default Home