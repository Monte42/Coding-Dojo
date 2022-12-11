import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton'
import Header from '../components/Header'
import LikeButton from '../components/LikeButton'

const Details = () => {
    const {id} = useParams()
    const [resolution,setResolution] = useState({})

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/resolutions/${id}`)
            .then((res) => {
                setResolution(res.data)
            })
            .catch(e => console.log(e))
    },[])

    return (
        <div>
            <Header path={"/"} title={"Home"} />
            <div style={{textAlign:"left", padding:"20px"}}>
                <div style={{display:"flex", alignItems:"center"}}>
                    <h1>{resolution.name}</h1>
                    <DeleteButton id={resolution._id} />
                </div>
                <h3>Category: {resolution.category}</h3>
                <h3>Description: {resolution.description}</h3>
                {resolution.rewards && resolution.rewards.map((r,i)=>(
                    r.length>0 && <h3 key={i}>Reward {i+1}: {r}</h3>
                ))}
            </div>
            <LikeButton id={resolution._id}/>
        </div>
    )
}

export default Details