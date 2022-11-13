import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {
    const [name,setName] = useState("")
    const [comment,setComment] = useState("")
    const navigate = useNavigate()

    const sendSurvey = (e) => {
        e.preventDefault()
        navigate("/results")
    }
    const backOne = (e) => {
        e.preventDefault()
        navigate(-1)
    }

    return(
        <div style={{color:"red"}}>
        <h1>HOME COMP</h1>
        <Link to={"/about"}>About</Link>
        <form onSubmit={sendSurvey}>
            <label>
            Your Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label><br/>
            <label>
            Your Comment:
            <textarea onChange={e => setComment(e.target.value)}>{comment}</textarea>
            </label><br/>
            <input type="submit" value="Submit" />
        </form>
        <button onClick={backOne}>Back</button>
        </div>
    )
}

export default Home