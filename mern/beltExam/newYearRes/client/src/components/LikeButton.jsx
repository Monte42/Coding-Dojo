import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const LikeButton = () => {
    const {id} = useParams()
    const [resolution,setResolution] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:8000/api/resolutions/${id}`)
            .then(res => setResolution(res.data))
    },[id])

    const addLike = () => {
        document.getElementById("btn").disabled = true;
        const updatedResolutionLikes = {
            name: resolution.name,
            category: resolution.category,
            descrition: resolution.descrition,
            rewards: resolution.rewards,
            likes: resolution.likes+=1
        }
        axios.put(`http://localhost:8000/api/resolutions/${id}`, updatedResolutionLikes)
            .then((res) => {
                console.log(res);
            })
            .catch(e => console.log(e))
    }



    return (
        <div>
            <button id='btn' onClick={addLike}>Like</button>
            <span>Like(s): {resolution.likes}</span>
        </div>
    )
}

export default LikeButton