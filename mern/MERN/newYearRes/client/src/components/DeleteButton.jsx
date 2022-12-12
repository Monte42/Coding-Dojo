import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../App'

const DeleteButton = ({id}) => {
    const [resolutions,setResolutions,socket] = useContext(AppContext)
    const navigate = useNavigate()

    const removeFromDom = revId => {
        axios.delete(`http://localhost:8000/api/resolutions/${revId}`)
            .then(() => {
                setResolutions(resolutions.filter(rev => rev._id !== revId))
            })
            .then(()=>socket.emit("change_in_resolutions", resolutions))
            .then(()=>navigate('/'))
            .catch(e => console.log(e))
    }

    return (
        <button style={{fontSize:"1.5vw", height:"40px", marginLeft:"50px"}} onClick={e => removeFromDom(id)}>Delete</button>
    )
}

export default DeleteButton