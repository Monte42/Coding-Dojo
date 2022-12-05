import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PersonForm from '../components/PersonForm'

const UpdatePerson = () => {
    const {id} = useParams()
    const [person,setPerson] = useState({})
    const [loaded,setLoaded] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/people/"+id)
        .then(res => {
            setPerson(res.data)
            setLoaded(true)
        })
        .catch(e => console.log(e))
    })
    const editPerson = personParam => {
        axios.put("http://localhost:8000/api/people/"+id, personParam)
        .then(res => {
            console.log(res)
        })
        navigate('/people')
    }

    return (
        <div>
            <h1>Edit {person.firstName}</h1>
            {
                loaded ?
                <PersonForm 
                    onSubmitProp={editPerson} 
                    initFirstName={person.firstName} 
                    initLastName={person.lastName} 
                    initAge={person.age} 
                    initEmail={person.email} 
                /> :
                <h1>LOADIND....</h1>
            }
        </div>
    )
}

export default UpdatePerson