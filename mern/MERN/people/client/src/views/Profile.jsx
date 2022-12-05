import axios from "axios"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"

const Profile = () => {
    const {id} = useParams()
    const [person,setPerson] = useState({})
    useEffect(() =>{
        axios.get("http://localhost:8000/api/people/"+id)
            .then(res => setPerson(res.data))
            .catch(e => console.log(e))
    },[])
    return (
        <div>
            <h1>{person.firstName}</h1>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
            <p>Age: {person.age}</p>
            <p>Email: {person.email}</p>
        </div>
    )
}

export default Profile