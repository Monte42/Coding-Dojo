import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import ResolutionForm from '../components/ResolutionForm'

const EditResolution = () => {
    const [resolution,setResolution] = useState({})
    const [errors,setErrors] = useState({})
    const navigate =useNavigate()
    const {id} = useParams()
    const [loaded,setLoaded] = useState(false)
    useEffect(() => {
        axios.get(`http://localhost:8000/api/resolutions/${id}`)
            .then(res => setResolution(res.data))
            .then(() => setLoaded(true))
            .catch(e => console.log(e))
    },[])

    const updateResolution = (resolution) => {
        axios.put(`http://localhost:8000/api/resolutions/${id}`, resolution)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch(err => setErrors(err.response.data.errors))
    }

    return (
    <div>
        <Header path={"/"} title={"Home"} />
        <h2>Edit Resolution</h2>
        { loaded &&
            <ResolutionForm 
                submitProp={updateResolution}
                initName={resolution.name}
                initCat={resolution.category}
                initDesc={resolution.description}
                initRew={resolution.rewards}
                initLikes={resolution.likes}
                errors={errors}
            />
        }
    </div>
    )
}

export default EditResolution