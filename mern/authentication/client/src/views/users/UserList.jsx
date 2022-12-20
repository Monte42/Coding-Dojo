import axios from 'axios'
import { useState,useContext,useEffect } from 'react'
import { UserContext } from '../../App'
import { Link,useNavigate } from 'react-router-dom'
import PageHeader from '../../components/general/PageHeader'

const Home = () => {
    const [users,setUsers] = useState([])
    const [user] = useContext(UserContext)
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
            <PageHeader />
            <h1>All Users</h1>
            {
                users.map((u,i) => {
                    const a = [u._id, user._id].sort()
                    if (user._id !== u._id) {
                        return (
                            <p key={i}>
                                {u.firstName} {u.lastName} |
                                <Link to={`/users/${u._id}/edit`}>Edit</Link> |
                                <Link to={`/chat/${a[0]}_${a[1]}`}>Chat</Link> 
                            </p>
                        )
                    }
                })
            }
            <button onClick={e =>logOut()}>Logout</button>
        </div>
    )
}

export default Home