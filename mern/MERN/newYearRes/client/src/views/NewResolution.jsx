import {useState} from 'react'
import axios from 'axios'
import Header from '../components/Header'
import ResolutionForm from '../components/ResolutionForm'
import { useNavigate } from 'react-router-dom'

const NewResolution = () => {
    const [errors,setErrors] = useState({})
    const navigate = useNavigate()

    const addResolution = resolution => {
        axios.post("http://localhost:8000/api/resolutions", resolution)
        .then(() => {
            navigate("/")
        })
        .catch(err => setErrors(err.response.data.errors))
    }

    return (
        <div>
            <Header path="/" title="Home" />
            <ResolutionForm 
                submitProp={addResolution}
                initName={""}
                initCat={""}
                initDesc={""}
                initRew={["","",""]}
                initLikes={0}
                errors={errors}
            />
        </div>
    )
}

export default NewResolution