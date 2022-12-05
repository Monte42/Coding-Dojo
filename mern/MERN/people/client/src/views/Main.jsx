import {useState, useEffect} from 'react'
import axios from "axios"
import PersonForm from "../components/PersonForm"
import DisplayAll from "../components/DisplayAll"

const Main = () => {
    const [personList, setPersonList] = useState([])
    const [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/people")
        .then(res => setPersonList(res.data))
        .catch(err => console.log(`Error: ${err}`))
    },[personList])

    const removeFromDom = personId => {
        axios.delete("http://localhost:8000/api/people/"+personId)
            .then(res=>setPersonList(personList.filter(person => person._id !== personId)))
            .catch(err => console.log(`Error ${err}`))
    }

    const addPerson = personParam => {
        axios.post("http://localhost:8000/api/people/", personParam)
            .then(res => {
                setErrors({})
                setPersonList([...personList, res.data])
            })
            .catch(err => {
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div>
            <PersonForm 
                onSubmitProp={addPerson} 
                initFirstName={""} 
                initLastName={""} 
                initAge={0} 
                initEmail={""}
                errors={errors}
                setErrors={setErrors}
            />
            <DisplayAll
                removeFromDom={removeFromDom}
                personList={personList}
            />
        </div>
    )
}

export default Main