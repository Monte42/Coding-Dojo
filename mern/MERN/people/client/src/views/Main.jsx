import {useState, useEffect} from 'react'
import axios from "axios"
import PersonForm from "../components/PersonForm"
import DisplayAll from "../components/DisplayAll"

const Main = () => {
    const [personList, setPersonList] = useState([])

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
                console.log(res.data);
                setPersonList([...personList, res.data])
            })
            .catch(err => console.log(`error ${err}`))
    }

    return (
        <div>
            <PersonForm 
                onSubmitProp={addPerson} 
                initFirstName={""} 
                initLastName={""} 
                initAge={0} 
                initEmail={""} 
            />
            <DisplayAll
                removeFromDom={removeFromDom}
                personList={personList}
            />
        </div>
    )
}

export default Main