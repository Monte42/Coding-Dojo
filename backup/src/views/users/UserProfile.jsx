import { useContext } from 'react'
import { JournalContext } from '../../App'
import { useNavigate } from "react-router-dom"
import DeleteBtn from '../../components/general/DeleteBtn'
import TraderNav from '../../components/general/TraderNav'

const UserProfile = () => {
    const [user,setUser] = useContext(JournalContext)
    const navigate = useNavigate()

    const onDelete = () => {
        setUser(null)
        navigate('/register')
    }

    return (
        <div>
            <TraderNav />
            <h2>{user.name}</h2>
            <DeleteBtn 
                docModel={"users"}
                docId={user.id}
                event={onDelete}
            />
        </div>
    )
}

export default UserProfile