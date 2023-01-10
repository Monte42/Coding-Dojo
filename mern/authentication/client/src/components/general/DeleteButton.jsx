import axios from "axios"
import { useNavigate } from "react-router-dom"

const DeleteButton = ({user, setUser}) => {
    const navigate = useNavigate()

    const removeFromDom = userID => {
        axios.delete(`http://localhost:8000/api/users/${userID}`, {withCredentials:true})
            .then(() =>{
                setUser(null)
                navigate('/register')
            })
            .catch(err => console.log(err))
    }
    return (
        <button className="btn btn-danger" onClick={e => removeFromDom(user._id)}>Delete</button>
    )
}

export default DeleteButton